import { API_URL } from "@/components/common/Constants";
import type { post } from "@/lib/types/types";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Penny Post - post Details";
export const size = {
  width: 800,
  height: 530,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { id: string } }) {
  const post: post = await fetch(`${API_URL}/${params.id}`).then((res) =>
    res.json(),
  );
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 36,
          backgroundImage: `url(${post.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "black",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {post.title}
      </div>
    ),
    size,
  );
}
