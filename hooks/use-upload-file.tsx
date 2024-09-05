import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useUploadThingy } from "./use-upload-thingy";
import { toast } from "sonner";
import axios, { AxiosError } from "axios";
import { z } from "zod";
import { createChatSchema } from "@/lib/schema/api/create-chat";

type ChatSchema = z.infer<typeof createChatSchema>;

const createChat = async (data: ChatSchema) => {
  // validate date
  const parsedData = createChatSchema.safeParse(data);
  if (!parsedData.success) {
    toast.error("Data format is wrong");
    return;
  }

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/create-chat`,
    parsedData.data
  );

  return response.data;
};

export const useUploadFile = () => {
  const [files, setFiles] = React.useState<File[]>([]);
  const [uploading, setUploading] = React.useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: createChat,
  });

  const { isUploading, progress, startUpload, permittedFileInfo } =
    useUploadThingy("pdfFile", {
      onClientUploadComplete: (file) => {
        const {
          serverData: { key, name, url },
        } = file[0];

        const data = {
          pdf_key: key,
          pdf_name: name,
          pdf_url: url,
        };

        setUploading(true);

        toast.promise(
          new Promise((resolve, reject) => {
            mutate(data, {
              onSuccess: (data) => {
                setFiles([]);
                resolve(data);
              },
              onError: (error) => {
                setFiles([]);
                const axiosError = error as AxiosError;
                const responseError = axiosError.response?.data;

                reject(responseError || error.message);
              },
            });
          }),
          {
            loading: `Creating chat`,
            success: "Chat successfully created",
            error: (error) => error,
          }
        );

        setUploading(false);
      },
      onUploadError: () => {
        setFiles([]);
        return Promise.reject();
      },
    });

  const fileTypes = permittedFileInfo?.config
    ? Object.keys(permittedFileInfo?.config)
    : [];

  const maxFileCount = permittedFileInfo?.config.image?.maxFileCount || 1;
  const maxFileSize =
    Number(permittedFileInfo?.config.image?.maxFileSize.replace("MB", "")) *
    1024 *
    1024;

  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > maxFileCount) {
        toast.error("Cannot upload more than 1 file at a time");
        return;
      }

      if (acceptedFiles[0]?.size > maxFileSize) {
        toast.error("File too large");
        return;
      }

      if (acceptedFiles.length === 0) {
        toast.error(`File was rejected`);
        return;
      }

      setFiles(acceptedFiles);

      toast.promise(startUpload(acceptedFiles), {
        loading: `Uploading file`,
        success: "File successfully uploaded",
        error: "Failed to upload file",
      });
    },
    [files]
  );

  const isDisabled = uploading || isUploading || isPending;

  return {
    isDisabled,
    files,
    progress,
    maxFileCount,
    maxFileSize,
    fileTypes,
    onDrop,
  };
};
