interface LoaderProps {
  message?: string;
}

export default function Loader({ message }: LoaderProps) {
  return (
    <div className="flex h-1/3 w-full flex-col items-center justify-center text-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-dashed border-primary"></div>
      <h2 className="mt-4">{message || "Loading..."}</h2>
    </div>
  );
}
