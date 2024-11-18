import { Document } from "@prisma/client";
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
        {docs.map((doc) => (
          <div
            className="flex items-center justify-between border-b px-2 py-4"
            key={doc.id}
          >
            <DocumentsListItem
              pdfName={doc.pdfName}
              pdfUrl={doc.pdfUrl}
              pdfSize={doc.pdfSize}
              createdAt={doc.createdAt}
            />

            <DocumentListDropdown documentKey={doc.fileKey} />
          </div>
        ))}
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
      <p className="mx-1 h-10 w-10"></p>
    </div>
  );
}
