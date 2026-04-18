"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function AdminChangePasswordPage() {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setOk(false);
    if (newPassword !== confirm) {
      setError("La nueva contraseña y la confirmación no coinciden.");
      return;
    }
    setPending(true);
    try {
      const res = await fetch("/api/admin/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(data.error ?? "No se pudo actualizar.");
        return;
      }
      setCurrentPassword("");
      setNewPassword("");
      setConfirm("");
      setOk(true);
      router.refresh();
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-xl font-semibold text-white">Cambiar contraseña</h1>
      <p className="mt-2 text-sm text-zinc-400">
        Cada cuenta (steph / michelle) puede guardar su propia contraseña en Supabase. La contraseña compartida por
        variable de entorno solo aplica si aún no has guardado una aquí.
      </p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div>
          <label htmlFor="cur" className="block text-sm text-zinc-300">
            Contraseña actual
          </label>
          <input
            id="cur"
            type="password"
            autoComplete="current-password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="mt-1 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-zinc-100 outline-none focus:ring-2 focus:ring-zinc-500"
            required
          />
        </div>
        <div>
          <label htmlFor="nw" className="block text-sm text-zinc-300">
            Nueva contraseña (mín. 10 caracteres)
          </label>
          <input
            id="nw"
            type="password"
            autoComplete="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-zinc-100 outline-none focus:ring-2 focus:ring-zinc-500"
            required
            minLength={10}
          />
        </div>
        <div>
          <label htmlFor="cf" className="block text-sm text-zinc-300">
            Confirmar nueva contraseña
          </label>
          <input
            id="cf"
            type="password"
            autoComplete="new-password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="mt-1 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-zinc-100 outline-none focus:ring-2 focus:ring-zinc-500"
            required
            minLength={10}
          />
        </div>
        {error ? <p className="text-sm text-red-400">{error}</p> : null}
        {ok ? <p className="text-sm text-lime-400">Contraseña actualizada.</p> : null}
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200 disabled:opacity-50"
        >
          {pending ? "Guardando…" : "Guardar nueva contraseña"}
        </button>
      </form>
    </div>
  );
}
