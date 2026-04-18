import type { Metadata } from "next";
import { CollaboratorApplyForm } from "./collaborator-apply-form";

export const metadata: Metadata = {
  title: "Colaborar · FLOW CDMX",
  description:
    "Marcas, productores y proyectos: cuéntanos cómo te gustaría colaborar en FLOW CDMX.",
  robots: { index: true, follow: true },
};

export default function ColaborarPage() {
  return <CollaboratorApplyForm initialLocale="es" />;
}
