import { ImageResponse } from "next/og";
import { personal } from "@/lib/data";

export const runtime = "edge";

export const alt = `${personal.name} — ${personal.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background:
            "radial-gradient(1000px 600px at 20% -10%, #312e81 0%, transparent 60%), radial-gradient(900px 600px at 100% 120%, #6d28d9 0%, transparent 55%), #05060a",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 26,
            color: "#a5b4fc",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              fontSize: 30,
              fontWeight: 700,
              color: "white",
            }}
          >
            IH
          </div>
          Portfolio
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 800,
            marginTop: 40,
            lineHeight: 1.05,
          }}
        >
          {personal.name}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 46,
            fontWeight: 600,
            marginTop: 8,
            color: "#e2e8f0",
          }}
        >
          {personal.role}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            marginTop: 28,
            color: "#94a3b8",
            maxWidth: 900,
          }}
        >
          React · Next.js · Node.js · TypeScript · AI Integrations
        </div>
      </div>
    ),
    { ...size }
  );
}
