import { ImageResponse } from "next/og";

// Site-wide default social card, generated at build/request time so it always
// matches the current messaging (no stale baked-in JPG to maintain).
export const alt = "Steve Kaplan. Paid media operator, building GTMVP.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0f172a",
          padding: "76px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            color: "#3b82f6",
            textTransform: "uppercase",
          }}
        >
          stevekaplan.ai
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 80,
              fontWeight: 800,
              color: "#f8fafc",
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            I don&apos;t advise. I build.
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "#94a3b8", marginTop: 26 }}>
            Paid media operator. Building GTMVP.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 28, fontSize: 30, color: "#3b82f6", fontWeight: 700 }}>
          <span>$50M+ managed</span>
          <span style={{ color: "#334155" }}>/</span>
          <span>3.2x lifetime ROAS</span>
          <span style={{ color: "#334155" }}>/</span>
          <span>100+ clients</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
