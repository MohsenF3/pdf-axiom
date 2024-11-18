export const formatDateTime = (isoDateString: Date | string): string => {
  const date = new Date(isoDateString);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  return date.toLocaleString("en-US", options);
};

export function formatBytes(
  bytes: number,
  opts: {
    decimals?: number;
    sizeType?: "accurate" | "normal";
  } = {},
) {
  const { decimals = 0, sizeType = "normal" } = opts;

  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const accurateSizes = ["Bytes", "KiB", "MiB", "GiB", "TiB"];
  if (bytes === 0) return "0 Byte";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${
    sizeType === "accurate"
      ? (accurateSizes[i] ?? "Bytest")
      : (sizes[i] ?? "Bytes")
  }`;
}

export const formatFileSize = (sizeInBytes: number) => {
  if (sizeInBytes < 1024) return `${sizeInBytes} bytes`;
  if (sizeInBytes < 1024 * 1024) return `${(sizeInBytes / 1024).toFixed(2)} KB`;
  return `${(sizeInBytes / (1024 * 1024)).toFixed(2)} MB`;
};

export const timeAgo = (date: Date): string => {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    return `Created about ${interval} year${interval === 1 ? "" : "s"} ago`;
  }

  interval = Math.floor(seconds / 2592000); // 30 days
  if (interval >= 1) {
    return `Created about ${interval} month${interval === 1 ? "" : "s"} ago`;
  }

  interval = Math.floor(seconds / 86400); // 1 day
  if (interval >= 1) {
    return `Created about ${interval} day${interval === 1 ? "" : "s"} ago`;
  }

  interval = Math.floor(seconds / 3600); // 1 hour
  if (interval >= 1) {
    return `Created about ${interval} hour${interval === 1 ? "" : "s"} ago`;
  }

  interval = Math.floor(seconds / 60); // 1 minute
  if (interval >= 1) {
    return `Created about ${interval} minute${interval === 1 ? "" : "s"} ago`;
  }

  return `Created just now`;
};
