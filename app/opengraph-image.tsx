import { flowCdmxOgImageResponse } from "@/lib/og-flow-cdmx";

export const runtime = "edge";

export const alt =
  "FLOW CDMX — 30 y 31 de mayo, Ciudad de México. Cine, música y tecnología regenerativa. Flow Nation.";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default function OpenGraphImage() {
  return flowCdmxOgImageResponse();
}
