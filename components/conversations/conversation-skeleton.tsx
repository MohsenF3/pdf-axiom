import { Skeleton } from "../ui/skeleton";

export default function ConversationSkeleton() {
  return (
    <div className="space-y-3">
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
    <div className="flex items-center justify-between border-b pb-3">
      <div className="flex w-full items-start gap-5 py-2">
        <Skeleton className="size-5" />

        <div className="flex w-full flex-col justify-between gap-2">
          <Skeleton className="h-2 w-2/3 md:w-1/4" />
          <Skeleton className="h-2 w-1/3 md:w-1/6" />
        </div>
      </div>

      <div className="mr-4 flex items-center gap-[2px]">
        <Skeleton className="size-1" />
        <Skeleton className="size-1" />
        <Skeleton className="size-1" />
      </div>
    </div>
  );
}
