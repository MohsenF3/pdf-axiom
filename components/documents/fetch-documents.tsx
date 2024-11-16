import documentsImage from "@/public/documents.webp";
import dynamic from "next/dynamic";
import Image from "next/image";
import { redirect } from "next/navigation";
import { loadConversations } from "../conversations/fetch-conversations";
import EmptyData from "../shared/empty-data";
import Error from "../shared/error";
import DocumentsTable from "./documents-table";
const UploadModal = dynamic(
  () => import("@/components/documents/upload/upload-modal"),
  {
    ssr: false,
  },
);

export default async function FetchDocuments() {
  const { status, message, data } = await loadConversations();

  // redirect user to login page if not logged in
  if (status === 401) {
    redirect("/login");
    return null;
  }

  if (status === 500) {
    return <Error message={message} />;
  }

  return data?.length ? (
    <DocumentsTable />
  ) : (
    <EmptyData
      message="Oops! you haven’t uploaded any document."
      button={<UploadModal />}
      image={
        <div className="relative w-[250px]">
          <Image
            src={documentsImage}
            alt="documents image"
            className="bg-blend-overlay"
          />
        </div>
      }
    />
  );
}
