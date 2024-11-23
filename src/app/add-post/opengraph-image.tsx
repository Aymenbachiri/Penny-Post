import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Penny Post Add Post - Create Your Blog Content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "#e2e8f0",
          color: "#333",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <div style={{ fontSize: 60, fontWeight: "bold" }}>Penny Post</div>
        <div
          style={{ fontSize: 48, fontWeight: "lighter", marginBottom: "20px" }}
        >
          Add Post - Start Creating Your Blog Content
        </div>
        <div style={{ fontSize: 32, fontWeight: "lighter" }}>
          Share your ideas and make an impact with your posts!
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
