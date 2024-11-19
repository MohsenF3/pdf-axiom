import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { timeAgo } from "@/lib/formatter";
import { IconPDF } from "../ui/icons";
import PdfView from "./pdf-view";

interface DocumentsListItemProps {
  pdfName: string;
  pdfUrl: string;
  createdAt: Date;
  trigger: React.ReactNode;
}

export default async function DocumentsListItem({
  createdAt,
  pdfName,
  pdfUrl,
  trigger,
}: DocumentsListItemProps) {
  const formattedDateAgo = timeAgo(createdAt);

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-5 border-b pb-3 text-start">
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
