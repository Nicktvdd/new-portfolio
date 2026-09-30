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
          background: "linear-gradient(135deg, #f8f4ea 0%, #f5e6c4 55%, #d7e3dc 100%)",
          color: "#1e2321",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", fontSize: 34, letterSpacing: -0.5 }}>
          {site.name}
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#c98a1e", marginLeft: 4, marginBottom: 9 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2, lineHeight: 1 }}>I build products</div>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2, lineHeight: 1, color: "#2f6a63" }}>
            end to end.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#5f655b" }}>
          <span>Founder-minded full-stack engineer</span>
          <span>Helsinki / remote</span>
        </div>
      </div>
    ),
    size,
  );
}
