import { Dashboard } from "@/app/dashboard/_components/Dashboard";
import { DashboardItemFallback } from "@/app/dashboard/_components/DashboardItemFallback";
import { Suspense } from "react";

export default async function DashboardPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl p-4 pt-[15%]">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
        Manage Your Blog Posts
      </h1>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
        Welcome to your Penny Post dashboard! Here, you can edit, delete, and
        review all your blog posts in one place. Stay organized and keep your
        content up-to-date effortlessly.
      </p>
      <Suspense fallback={<DashboardItemFallback />}>
        <section className="mt-6">
          <Dashboard />
        </section>
      </Suspense>
      {/* <DashboardItemFallback /> */}
    </main>
  );
}
