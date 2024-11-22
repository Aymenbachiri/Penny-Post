export function PostItemSkeleton() {
  return (
    <div
      className="animate-pulse overflow-hidden rounded bg-white shadow-sm"
      aria-label="Loading Article"
    >
      <div className="h-64 w-[390px] rounded-md bg-gray-200" />
      <div className="space-y-4 px-4 py-5">
        <div className="h-4 w-32 rounded bg-gray-200"></div>
        <div className="h-6 w-full rounded bg-gray-200"></div>
        <div className="h-4 w-3/4 rounded bg-gray-200"></div>
        <div className="flex items-center space-x-4">
          <div className="h-10 w-10 rounded-full bg-gray-200"></div>
          <div className="space-y-2">
            <div className="h-4 w-24 rounded bg-gray-200"></div>
            <div className="h-3 w-16 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
