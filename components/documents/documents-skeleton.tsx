import { Skeleton } from "../ui/skeleton";

export default function DocumentsSkeleton() {
  return (
    <div className="space-y-5">
      <Skeleton className="h-11 w-full" />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
    </div>
  );
}

function SkeletonItem() {
  return (
    <div className="flex border-b pb-5">
      <div className="flex-[2]">
        <Skeleton className="h-8 w-36" />
      </div>

      <div className="flex flex-1 items-center justify-end md:justify-between">
        <Skeleton className="hidden h-8 w-20 md:block" />
        <Skeleton className="hidden h-8 w-20 md:block" />

        <div className="mr-4 flex items-center gap-[2px]">
          <Skeleton className="size-1" />
          <Skeleton className="size-1" />
          <Skeleton className="size-1" />
        </div>
      </div>
    </div>
  );
}
