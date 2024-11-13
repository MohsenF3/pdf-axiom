import DocumentsSkeleton from "@/components/documents/documents-skeleton";
import FetchDocuments from "@/components/documents/fetch-documents";
import UploadButton from "@/components/documents/upload-button";
import PageHeader from "@/components/shared/page-header";
import { Suspense } from "react";

export default async function DocumentsPage() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <PageHeader
          title="Documents"
          description="View all your uploaded documents here"
        />

        <UploadButton />
      </div>

      <div className="flex-1 overflow-y-auto">
        <Suspense fallback={<DocumentsSkeleton />}>
          <FetchDocuments />
        </Suspense>
      </div>
    </>
  );
}
