import { ArtistApplyForm } from "./artist-apply-form";

export default async function ArtistApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const sp = await searchParams;
  const initialLocale = sp.lang === "en" ? "en" : "es";
  return <ArtistApplyForm initialLocale={initialLocale} />;
}
