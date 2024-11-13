import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "../ui/button";
import { IconUpload } from "../ui/icons";

interface UploadButtonProps extends ButtonProps {}

export default function UploadButton({
  className,
  ...props
}: UploadButtonProps) {
  return (
    <Button variant="gooeyLeft" className={cn("gap-1", className)} {...props}>
      <IconUpload className="size-5" />
      Upload
    </Button>
  );
}
