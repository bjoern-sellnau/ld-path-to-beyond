import { ImageResponse } from "next/og";

export const alt = "Loona! Designs – Bjoern Sellnau, Senior Developer aus Berlin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px",
          background: "radial-gradient(circle at 75% 40%, #0b3a63 0%, #05070c 60%)",
          color: "#e8eef8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div style={{ fontSize: 26, color: "#4cc1ff", letterSpacing: 6, textTransform: "uppercase" }}>
            Loona! Designs
          </div>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05, marginTop: 24 }}>What the web can be.</div>
          <div style={{ fontSize: 30, color: "#93a1b8", marginTop: 32 }}>
            Bjoern Sellnau · Senior Developer · Berlin · KI-Lab
          </div>
        </div>
        <div
          style={{
            width: 320,
            height: 320,
            borderRadius: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "radial-gradient(circle at 32% 28%, #9fe0ff 0%, #19a7ff 38%, #0a4f8c 70%, #04203a 100%)",
            boxShadow: "0 0 160px rgba(25,167,255,0.45)",
          }}
        >
          <div
            style={{
              width: 250,
              height: 250,
              borderRadius: 9999,
              background: "#f4f8ff",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ width: 200, height: 200, borderRadius: 9999, background: "#05070c" }} />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
