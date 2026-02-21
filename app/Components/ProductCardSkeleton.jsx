


export default function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-3 animate-pulse">
      
      {/* image skeleton */}
      <div className="mx-auto h-40 w-32 bg-gray-200 rounded-md" />

      {/* title skeleton */}
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-3/4" />

      {/* price skeleton */}
      <div className="h-5 bg-gray-200 rounded w-1/3" />

      {/* button skeleton */}
      <div className="h-10 bg-gray-200 rounded-lg w-full" />
    </div>
  );
}