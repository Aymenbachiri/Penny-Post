"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export function UserName() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return (
      <span
        style={{
          display: "inline-block",
          width: "70px",
          height: "20px",
          background: "#ccc",
          borderRadius: "4px",
        }}
      />
    );
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return <span>{user?.name}</span>;
}
