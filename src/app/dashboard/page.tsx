import DashboardPage from "@/components/pages/DashboardPage";
import { ProtectedPage } from "@/lib/helpers/ProtectedPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Manage Your Content | Penny Post",
  description:
    "Access your personalized dashboard to manage your blog posts, drafts, and account settings.",
};

export default function page() {
  return (
    <ProtectedPage>
      <DashboardPage />;
    </ProtectedPage>
  );
}
