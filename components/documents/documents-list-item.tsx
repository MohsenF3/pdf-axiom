import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { formatDateTime, formatFileSize, timeAgo } from "@/lib/formatter";
import { IconPDF } from "../ui/icons";
import PdfView from "./pdf-view";

interface DocumentsListItemProps {
  pdfName: string;
  pdfUrl: string;
  pdfSize: number;
  createdAt: Date;
}

export default async function DocumentsListItem({
  createdAt,
  pdfName,
  pdfSize,
  pdfUrl,
}: DocumentsListItemProps) {
  const formattedSize = formatFileSize(pdfSize);
  const formattedDate = formatDateTime(createdAt);
  const formattedDateAgo = timeAgo(createdAt);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex w-[70%] items-center justify-between md:w-full">
          <div className="flex w-full items-start gap-1 text-start md:w-[40%]">
            <IconPDF className="size-12 flex-shrink-0" />
            <p className="truncate font-semibold capitalize">{pdfName}</p>
          </div>
          <div className="hidden w-[45%] items-center justify-evenly md:flex">
            <p className="w-full text-start">{formattedSize}</p>
            <p className="w-full text-start">{formattedDate}</p>
          </div>
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-5 border-b pb-3">
          <SheetTitle>View Document</SheetTitle>
          <SheetDescription>{formattedDateAgo}</SheetDescription>
        </SheetHeader>

        <div className="flex h-full flex-col gap-5">
          <div className="flex items-start gap-1">
            <IconPDF className="size-12 flex-shrink-0" />
            <p className="text-sm">{pdfName}</p>
          </div>

          <PdfView url={pdfUrl} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
