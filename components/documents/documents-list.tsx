import { formatDateTime, formatFileSize } from "@/lib/formatter";
import { cn } from "@/lib/utils";
import { Document } from "@prisma/client";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { IconAddChat, IconPDF } from "../ui/icons";
import DocumentListDropdown from "./document-list-dropdown";
import DocumentsListItem from "./documents-list-item";

interface DocumentsTableProps {
  docs: Document[];
}

export default function DocumentsTable({ docs }: DocumentsTableProps) {
  return (
    <div>
      <DocumentsListHead />

      <div>
        {docs.map((doc) => {
          const formattedSize = formatFileSize(doc.pdfSize);
          const formattedDate = formatDateTime(doc.createdAt);

          return (
            <div
              className="flex items-center justify-between border-b px-2 py-4"
              key={doc.id}
            >
              <DocumentsListItem
                pdfName={doc.pdfName}
                pdfUrl={doc.pdfUrl}
                createdAt={doc.createdAt}
                trigger={
                  <button className="flex w-[70%] items-center justify-between md:w-full">
                    <div className="flex w-full items-start gap-1 text-start md:w-[40%]">
                      <IconPDF className="size-12 flex-shrink-0" />
                      <p className="truncate font-semibold">{doc.pdfName}</p>
                    </div>
                    <div className="hidden w-[45%] items-center justify-evenly md:flex">
                      <p className="w-full text-start">{formattedSize}</p>
                      <p className="w-full text-start">{formattedDate}</p>
                    </div>
                  </button>
                }
              />

              <div className="mr-1 flex items-center gap-2">
                <Link
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "rounded-md",
                  )}
                  href={`/conversation/${doc.fileKey}`}
                >
                  <IconAddChat className="size-6" />
                </Link>

                <DocumentListDropdown documentKey={doc.fileKey} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DocumentsListHead() {
  return (
    <div className="flex h-16 items-center justify-between rounded bg-muted px-2">
      <div className="flex w-full items-center justify-between">
        <p className="w-[40%]">File Name</p>

        <div className="hidden w-[45%] items-center justify-evenly md:flex">
          <p className="w-full">Size</p>
          <p className="w-full">Date Created</p>
        </div>
      </div>

      <div className="mr-1 flex items-center gap-2">
        <p className="h-10 w-10"></p>
        <p className="h-10 w-10"></p>
      </div>
    </div>
  );
}
