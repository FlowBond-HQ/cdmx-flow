import type { Metadata } from "next";
import Link from "next/link";
import { getAdminSession } from "@/lib/admin/session";
import { AdminLogoutButton } from "./logout-button";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getAdminSession();

  return (
    <div className="min-h-full bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800 bg-zinc-900/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link href="/admin" className="font-semibold tracking-tight text-white">
              FLOW CDMX · Admin
            </Link>
            {user ? (
              <>
                <Link href="/admin" className="text-zinc-400 hover:text-white">
                  Panel
                </Link>
                <Link href="/admin/change-password" className="text-zinc-400 hover:text-white">
                  Contraseña
                </Link>
              </>
            ) : null}
          </div>
          {user ? <AdminLogoutButton /> : null}
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}
