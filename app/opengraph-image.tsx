import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0d0c0f 0%, #08070a 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 15% 10%, rgba(211,171,95,0.35), transparent 55%)",
          }}
        />
        <div style={{ display: "flex", fontSize: 72, color: "#f4efe3", fontWeight: 600 }}>
          {SITE.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            marginTop: 20,
            background: "linear-gradient(90deg, #ecd8a3, #d3ab5f, #a37f3b)",
            backgroundClip: "text",
            color: "transparent",
            fontStyle: "italic",
          }}
        >
          {SITE.tagline}
        </div>
        <div style={{ display: "flex", width: 260, height: 3, background: "#d3ab5f", marginTop: 40 }} />
        <div style={{ display: "flex", fontSize: 20, letterSpacing: 3, color: "#a79f92", marginTop: 40 }}>
          WOODEN FLOORING · WALL PANELS · VENEERS · LAMINATES · HARDWARE
        </div>
      </div>
    ),
    { ...size }
  );
}
