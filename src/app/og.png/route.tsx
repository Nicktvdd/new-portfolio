import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #faf7f2 0%, #fbe3d9 60%, #e0f2fe 100%)",
          color: "#17150f",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", fontSize: 34, letterSpacing: -0.5 }}>
          {site.name}
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#d9542f", marginLeft: 4, marginBottom: 9 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2, lineHeight: 1 }}>I build products</div>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2, lineHeight: 1, color: "#d9542f" }}>
            end to end.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#6a655b" }}>
          <span>Founder-minded full-stack engineer</span>
          <span>Helsinki / remote</span>
        </div>
      </div>
    ),
    size,
  );
}
