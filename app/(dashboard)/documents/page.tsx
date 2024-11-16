import DocumentsSkeleton from "@/components/documents/documents-skeleton";
import FetchDocuments from "@/components/documents/fetch-documents";
import PageHeader from "@/components/shared/page-header";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const UploadModal = dynamic(
  () => import("@/components/documents/upload/upload-modal"),
  {
    ssr: false,
  },
);

export default async function DocumentsPage() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <PageHeader
          title="Documents"
          description="View all your uploaded documents here"
        />

        <UploadModal />
      </div>

      

      <div className="flex-1 overflow-y-auto">
        <Suspense fallback={<DocumentsSkeleton />}>
          <FetchDocuments />
        </Suspense>
      </div>
    </>
  );
}
