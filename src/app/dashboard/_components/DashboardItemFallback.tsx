import { DashboardItemSkeleton } from "./DashboardItemSkeleton";

export function DashboardItemFallback() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 pt-8 sm:grid-cols-2 lg:grid-cols-3">
      <DashboardItemSkeleton />
      <DashboardItemSkeleton />
      <DashboardItemSkeleton />
      <DashboardItemSkeleton />
      <DashboardItemSkeleton />
      <DashboardItemSkeleton />
    </div>
  );
}
