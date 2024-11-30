/*
  Warnings:

  - You are about to drop the column `documentId` on the `Chat` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_documentId_fkey";

-- AlterTable
ALTER TABLE "Chat" DROP COLUMN "documentId",
ADD COLUMN     "documentKey" TEXT;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_documentKey_fkey" FOREIGN KEY ("documentKey") REFERENCES "Document"("fileKey") ON DELETE SET NULL ON UPDATE CASCADE;
