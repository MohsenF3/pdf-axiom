export default function GridPattern() {
  const columns = 41;
  const rows = 11;
  return (
    <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
      <div className="flex flex-shrink-0 scale-105 flex-wrap items-center justify-center gap-x-px gap-y-px bg-neutral-900">
        {Array.from({ length: rows }).map((_, row) =>
          Array.from({ length: columns }).map((_, col) => {
            const index = row * columns + col;
            return (
              <div
                key={`${col}-${row}`}
                className={`flex h-10 w-10 flex-shrink-0 rounded-[2px] ${
                  index % 2 === 0
                    ? "bg-neutral-900"
                    : "bg-neutral-900 shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"
                }`}
              />
            );
          }),
        )}
      </div>
    </div>
  );
}
