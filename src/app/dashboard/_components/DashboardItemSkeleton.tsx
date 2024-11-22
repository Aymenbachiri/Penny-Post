export function DashboardItemSkeleton() {
  return (
    <div className="h-[430px] w-full p-4 pt-14">
      <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
        {/* Skeleton for the image */}
        <div className="w-full animate-pulse bg-gray-300 md:h-36 lg:h-48"></div>

        <div className="p-6">
          {/* Skeleton for the title */}
          <div className="mb-3 h-5 w-3/4 animate-pulse rounded bg-gray-300"></div>

          {/* Skeleton for the description */}
          <div className="mb-3 h-4 w-full animate-pulse rounded bg-gray-300"></div>
          <div className="mb-3 h-4 w-5/6 animate-pulse rounded bg-gray-300"></div>

          {/* Skeleton for the buttons */}
          <div className="flex items-center">
            <div className="h-4 w-20 animate-pulse rounded bg-gray-300"></div>
            <div className="ml-auto flex space-x-3">
              <div className="h-6 w-6 animate-pulse rounded-full bg-gray-300"></div>
              <div className="h-6 w-6 animate-pulse rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
