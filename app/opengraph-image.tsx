import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "InstaCatch - Instagram Downloader";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, rgb(8,47,73) 0%, rgb(15,23,42) 50%, rgb(17,24,39) 100%)",
          color: "white",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 34, color: "rgb(103,232,249)", marginBottom: 20 }}>
          InstaCatch
        </div>
        <div style={{ fontSize: 70, fontWeight: 700, lineHeight: 1.1 }}>
          Download Instagram
        </div>
        <div style={{ fontSize: 70, fontWeight: 700, lineHeight: 1.1 }}>
          Posts, Reels, Stories
        </div>
        <div style={{ fontSize: 30, marginTop: 26, color: "rgb(203,213,225)" }}>
          Fast. HD. Free.
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

