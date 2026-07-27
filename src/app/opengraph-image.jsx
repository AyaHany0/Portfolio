import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Rendered at build time; uses only system fonts so no network fetch is needed.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundImage:
            "linear-gradient(135deg, #151515 0%, #101010 60%, #050505 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div
            style={{
              fontSize: 30,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#8B8B8B",
            }}
          >
            {siteConfig.jobTitle}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ fontSize: 120, fontWeight: 700, lineHeight: 1 }}>
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 38,
              color: "#CACACA",
              maxWidth: "900px",
              lineHeight: 1.35,
            }}
          >
            Building engaging, user-friendly web experiences with React,
            Next.js and Tailwind CSS.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
            color: "#8B8B8B",
          }}
        >
          <span>{siteConfig.country}</span>
          <span style={{ color: "#5B78F6" }}>
            {siteConfig.url.replace("https://", "")}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
