import { ImageResponse } from "next/og";

/** Hero match: black + chartreuse (see home hero CTAs). */
export const OG_BG = "#000000";
export const OG_LIME = "#D0FF5E";

const HERO_LEAD =
  "Un encuentro cultural paralelo a Sundance CDMX que celebra el futuro del cine, la creatividad y la cultura consciente en México — con proyecciones, paneles, música, bienestar y comunidad en un solo día.";

export function flowCdmxOgImageResponse() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "52px 64px 56px",
          background: OG_BG,
          fontFamily: 'ui-sans-serif, system-ui, "Segoe UI", sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flex: 1,
            justifyContent: "center",
            gap: 0,
          }}
        >
          <div
            style={{
              fontSize: 17,
              letterSpacing: "0.22em",
              color: OG_LIME,
              textTransform: "uppercase",
              fontWeight: 700,
              marginBottom: 20,
            }}
          >
            30 DE ABRIL · HUERTO ROMA VERDE · CIUDAD DE MÉXICO
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            FLOW CDMX
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#ffffff",
              maxWidth: 1020,
              lineHeight: 1.38,
              fontWeight: 400,
            }}
          >
            {HERO_LEAD}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
            marginTop: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 32px",
              borderRadius: 9999,
              background: OG_LIME,
              color: "#0a0a0a",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            BOLETOS
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 28px",
              borderRadius: 9999,
              border: `2px solid ${OG_LIME}`,
              background: "transparent",
              color: "#f5f5f5",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            ENGLISH VERSION
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

export function flowCdmxAppleIconResponse() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: OG_BG,
          borderRadius: 40,
        }}
      >
        <div
          style={{
            width: 128,
            height: 128,
            borderRadius: 64,
            background: OG_LIME,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: OG_BG,
              lineHeight: 1,
            }}
          >
            F
          </span>
        </div>
      </div>
    ),
    { width: 180, height: 180 },
  );
}
