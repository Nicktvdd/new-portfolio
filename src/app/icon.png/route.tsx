import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2f6a63",
          borderRadius: 56,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <span style={{ fontSize: 176, fontWeight: 700, color: "#f8f4ea", lineHeight: 1, letterSpacing: -6 }}>N</span>
          <div style={{ width: 34, height: 34, borderRadius: 999, background: "#e0a640", marginLeft: 6, marginBottom: 22 }} />
        </div>
      </div>
    ),
    { width: 256, height: 256 },
  );
}
