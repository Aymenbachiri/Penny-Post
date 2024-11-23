"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { redirect } from "next/navigation";

export function ProtectedPage({ children }: { children: React.ReactNode }) {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    redirect("/api/auth/login");
  }

  if (user) {
    return <>{children}</>;
  }
}
