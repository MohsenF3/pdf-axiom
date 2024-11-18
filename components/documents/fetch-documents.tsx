import { getDocuments } from "@/app/(dashboard)/documents/actions";
import documentsImage from "@/public/documents.webp";
import dynamic from "next/dynamic";
import Image from "next/image";
import { redirect } from "next/navigation";
import { cache } from "react";
import EmptyData from "../shared/empty-data";
import Error from "../shared/error";
import DocumentsList from "./documents-list";
const UploadModal = dynamic(
  () => import("@/components/documents/upload/upload-modal"),
  {
    ssr: false,
  },
);

const loadDocuments = cache(async () => {
  return await getDocuments();
});

export default async function FetchDocuments() {
  const { status, message, data } = await loadDocuments();

  // redirect user to login page if not logged in
  if (status === 401) {
    redirect("/login");
    return null;
  }

  // return error component if some error occurred in server
  if (status === 500) {
    return <Error message={message} />;
  }

  return data?.length ? (
    <DocumentsList docs={data} />
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
