/*
  Warnings:

  - You are about to drop the column `fileKey` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `pdfName` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `pdfSize` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `pdfUrl` on the `Chat` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Chat" DROP COLUMN "fileKey",
DROP COLUMN "pdfName",
DROP COLUMN "pdfSize",
DROP COLUMN "pdfUrl",
ADD COLUMN     "documentId" INTEGER;

-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "fileKey" TEXT NOT NULL,
    "pdfName" TEXT NOT NULL,
    "pdfUrl" TEXT NOT NULL,
    "pdfSize" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Document_fileKey_key" ON "Document"("fileKey");

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;
