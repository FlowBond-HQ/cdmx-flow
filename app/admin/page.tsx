import { requireAdminSession } from "@/lib/admin/session";
import {
  fetchArtistApplications,
  fetchCollaboratorApplications,
  fetchSponsorInquiries,
  fetchWaitlist,
} from "@/lib/admin/data";

function fmtDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("es-MX", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default async function AdminDashboardPage() {
  await requireAdminSession();

  const [waitlist, artists, sponsors, collaborators] = await Promise.all([
    fetchWaitlist(),
    fetchArtistApplications(),
    fetchSponsorInquiries(),
    fetchCollaboratorApplications(),
  ]);

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-2xl font-semibold text-white">Panel</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Datos en vivo desde Supabase: boletos, artistas, patrocinios y colaboradores (marca/proyecto).
        </p>
      </div>

      <section id="waitlist" className="scroll-mt-8">
        <h2 className="text-lg font-medium text-zinc-200">Lista de interés · boletos</h2>
        <p className="mt-0.5 text-sm text-zinc-500">Tabla: ticket_waitlist</p>
        {waitlist === null ? (
          <p className="mt-4 text-sm text-amber-400">
            No se pudieron cargar los datos. Revisa SUPABASE_SERVICE_ROLE_KEY y NEXT_PUBLIC_SUPABASE_URL en el
            entorno del servidor.
          </p>
        ) : waitlist.length === 0 ? (
          <p className="mt-4 text-sm text-zinc-500">Aún no hay registros.</p>
        ) : (
          <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-800">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-zinc-900 text-xs uppercase tracking-wide text-zinc-500">
                <tr>
                  <th className="px-3 py-2 font-medium">Fecha</th>
                  <th className="px-3 py-2 font-medium">Nombre</th>
                  <th className="px-3 py-2 font-medium">Email</th>
                  <th className="px-3 py-2 font-medium">Interés</th>
                  <th className="px-3 py-2 font-medium">Notas</th>
                  <th className="px-3 py-2 font-medium">Idioma</th>
                  <th className="px-3 py-2 font-medium">Origen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {waitlist.map((row) => (
                  <tr key={row.id} className="bg-zinc-950/50 hover:bg-zinc-900/50">
                    <td className="whitespace-nowrap px-3 py-2 text-zinc-400">{fmtDate(row.created_at)}</td>
                    <td className="px-3 py-2 text-zinc-200">{row.name}</td>
                    <td className="max-w-[200px] truncate px-3 py-2 font-mono text-xs text-zinc-300">
                      {row.email}
                    </td>
                    <td className="max-w-[160px] truncate px-3 py-2 text-zinc-300">{row.interest}</td>
                    <td className="max-w-[200px] truncate px-3 py-2 text-zinc-400">{row.notes ?? "—"}</td>
                    <td className="px-3 py-2 text-zinc-400">{row.locale}</td>
                    <td className="px-3 py-2 text-zinc-500">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section id="artists" className="scroll-mt-8">
        <h2 className="text-lg font-medium text-zinc-200">Solicitudes · artistas (escenario)</h2>
        <p className="mt-0.5 text-sm text-zinc-500">Tabla: artist_applications</p>
        {artists === null ? (
          <p className="mt-4 text-sm text-amber-400">
            No se pudieron cargar los datos. Revisa las variables de Supabase en el servidor.
          </p>
        ) : artists.length === 0 ? (
          <p className="mt-4 text-sm text-zinc-500">Aún no hay solicitudes.</p>
        ) : (
          <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-800">
            <table className="w-full min-w-[800px] text-left text-sm">
              <thead className="bg-zinc-900 text-xs uppercase tracking-wide text-zinc-500">
                <tr>
                  <th className="px-3 py-2 font-medium">Fecha</th>
                  <th className="px-3 py-2 font-medium">Nombre</th>
                  <th className="px-3 py-2 font-medium">Email</th>
                  <th className="px-3 py-2 font-medium">Teléfono</th>
                  <th className="px-3 py-2 font-medium">Instagram</th>
                  <th className="px-3 py-2 font-medium">Mensaje</th>
                  <th className="px-3 py-2 font-medium">Idioma</th>
                  <th className="px-3 py-2 font-medium">Origen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {artists.map((row) => (
                  <tr key={row.id} className="bg-zinc-950/50 hover:bg-zinc-900/50">
                    <td className="whitespace-nowrap px-3 py-2 align-top text-zinc-400">
                      {fmtDate(row.created_at)}
                    </td>
                    <td className="px-3 py-2 align-top text-zinc-200">{row.name}</td>
                    <td className="max-w-[180px] truncate px-3 py-2 align-top font-mono text-xs text-zinc-300">
                      {row.email}
                    </td>
                    <td className="max-w-[120px] truncate px-3 py-2 align-top text-zinc-400">
                      {row.phone ?? "—"}
                    </td>
                    <td className="max-w-[140px] truncate px-3 py-2 align-top text-zinc-400">
                      {row.instagram ?? "—"}
                    </td>
                    <td className="max-w-[280px] px-3 py-2 align-top text-zinc-300">
                      <span className="line-clamp-4 whitespace-pre-wrap">{row.message}</span>
                    </td>
                    <td className="px-3 py-2 align-top text-zinc-400">{row.locale}</td>
                    <td className="px-3 py-2 align-top text-zinc-500">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section id="sponsors" className="scroll-mt-8">
        <h2 className="text-lg font-medium text-zinc-200">Patrocinio / vendors</h2>
        <p className="mt-0.5 text-sm text-zinc-500">Tabla: sponsor_inquiries</p>
        {sponsors === null ? (
          <p className="mt-4 text-sm text-amber-400">
            No se pudieron cargar (¿corriste la migración 20250418140000 en Supabase?).
          </p>
        ) : sponsors.length === 0 ? (
          <p className="mt-4 text-sm text-zinc-500">Aún no hay solicitudes.</p>
        ) : (
          <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-800">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead className="bg-zinc-900 text-xs uppercase tracking-wide text-zinc-500">
                <tr>
                  <th className="px-3 py-2 font-medium">Fecha</th>
                  <th className="px-3 py-2 font-medium">Nombre</th>
                  <th className="px-3 py-2 font-medium">Email</th>
                  <th className="px-3 py-2 font-medium">Marca</th>
                  <th className="px-3 py-2 font-medium">Descripción</th>
                  <th className="px-3 py-2 font-medium">Activación</th>
                  <th className="px-3 py-2 font-medium">Web</th>
                  <th className="px-3 py-2 font-medium">Redes</th>
                  <th className="px-3 py-2 font-medium">Contacto extra</th>
                  <th className="px-3 py-2 font-medium">Idioma</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {sponsors.map((row) => (
                  <tr key={row.id} className="bg-zinc-950/50 hover:bg-zinc-900/50">
                    <td className="whitespace-nowrap px-3 py-2 align-top text-zinc-400">{fmtDate(row.created_at)}</td>
                    <td className="px-3 py-2 align-top text-zinc-200">{row.name}</td>
                    <td className="max-w-[160px] truncate px-3 py-2 align-top font-mono text-xs text-zinc-300">
                      {row.email}
                    </td>
                    <td className="max-w-[120px] truncate px-3 py-2 align-top text-zinc-400">{row.brand_name ?? "—"}</td>
                    <td className="max-w-[200px] px-3 py-2 align-top text-zinc-400">
                      <span className="line-clamp-3 whitespace-pre-wrap">{row.description ?? "—"}</span>
                    </td>
                    <td className="max-w-[160px] px-3 py-2 align-top text-zinc-400">
                      <span className="line-clamp-2">{row.offering ?? "—"}</span>
                    </td>
                    <td className="max-w-[120px] truncate px-3 py-2 align-top text-zinc-500">{row.website ?? "—"}</td>
                    <td className="max-w-[120px] truncate px-3 py-2 align-top text-zinc-500">{row.social ?? "—"}</td>
                    <td className="max-w-[140px] truncate px-3 py-2 align-top text-zinc-500">{row.contact_line ?? "—"}</td>
                    <td className="px-3 py-2 align-top text-zinc-500">{row.locale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section id="collaborators" className="scroll-mt-8">
        <h2 className="text-lg font-medium text-zinc-200">Colaboradores · marca / proyecto</h2>
        <p className="mt-0.5 text-sm text-zinc-500">Tabla: collaborator_applications</p>
        {collaborators === null ? (
          <p className="mt-4 text-sm text-amber-400">
            No se pudieron cargar (¿corriste la migración 20250418140000 en Supabase?).
          </p>
        ) : collaborators.length === 0 ? (
          <p className="mt-4 text-sm text-zinc-500">Aún no hay solicitudes.</p>
        ) : (
          <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-800">
            <table className="w-full min-w-[960px] text-left text-sm">
              <thead className="bg-zinc-900 text-xs uppercase tracking-wide text-zinc-500">
                <tr>
                  <th className="px-3 py-2 font-medium">Fecha</th>
                  <th className="px-3 py-2 font-medium">Nombre</th>
                  <th className="px-3 py-2 font-medium">Email</th>
                  <th className="px-3 py-2 font-medium">Marca / proyecto</th>
                  <th className="px-3 py-2 font-medium">Tel</th>
                  <th className="px-3 py-2 font-medium">LinkedIn</th>
                  <th className="px-3 py-2 font-medium">Web</th>
                  <th className="px-3 py-2 font-medium">IG</th>
                  <th className="px-3 py-2 font-medium">Proyecto</th>
                  <th className="px-3 py-2 font-medium">Idioma</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {collaborators.map((row) => (
                  <tr key={row.id} className="bg-zinc-950/50 hover:bg-zinc-900/50">
                    <td className="whitespace-nowrap px-3 py-2 align-top text-zinc-400">{fmtDate(row.created_at)}</td>
                    <td className="px-3 py-2 align-top text-zinc-200">{row.name}</td>
                    <td className="max-w-[160px] truncate px-3 py-2 align-top font-mono text-xs text-zinc-300">
                      {row.email}
                    </td>
                    <td className="max-w-[140px] truncate px-3 py-2 align-top text-zinc-400">
                      {row.brand_or_project_name ?? "—"}
                    </td>
                    <td className="max-w-[100px] truncate px-3 py-2 align-top text-zinc-500">{row.phone ?? "—"}</td>
                    <td className="max-w-[120px] truncate px-3 py-2 align-top text-zinc-500">{row.linkedin ?? "—"}</td>
                    <td className="max-w-[120px] truncate px-3 py-2 align-top text-zinc-500">{row.website ?? "—"}</td>
                    <td className="max-w-[100px] truncate px-3 py-2 align-top text-zinc-500">{row.instagram ?? "—"}</td>
                    <td className="max-w-[280px] px-3 py-2 align-top text-zinc-300">
                      <span className="line-clamp-4 whitespace-pre-wrap">{row.project_description}</span>
                    </td>
                    <td className="px-3 py-2 align-top text-zinc-500">{row.locale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
