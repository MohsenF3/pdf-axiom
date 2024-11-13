import documentsImage from "@/public/documents.webp";
import Image from "next/image";
import { redirect } from "next/navigation";
import { loadConversations } from "../conversations/fetch-conversations";
import EmptyData from "../shared/empty-data";
import Error from "../shared/error";
import DocumentsTable from "./documents-table";
import UploadButton from "./upload-button";

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
      button={<UploadButton />}
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
