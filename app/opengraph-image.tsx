import { flowCdmxOgImageResponse } from "@/lib/og-flow-cdmx";

export const runtime = "edge";

export const alt =
  "FLOW CDMX — 19 Junio, Ciudad de México. Cine, música y tecnología regenerativa. Flow Nation.";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default function OpenGraphImage() {
  return flowCdmxOgImageResponse();
}
