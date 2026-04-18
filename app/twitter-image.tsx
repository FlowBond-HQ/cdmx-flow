import { flowCdmxOgImageResponse } from "@/lib/og-flow-cdmx";

export const runtime = "edge";

export const alt =
  "FLOW CDMX — 30 de abril, Huerto Roma Verde, Ciudad de México. Encuentro cultural.";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default function TwitterImage() {
  return flowCdmxOgImageResponse();
}
