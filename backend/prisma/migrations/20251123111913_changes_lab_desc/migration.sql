/*
  Warnings:

  - You are about to drop the column `name` on the `Lab` table. All the data in the column will be lost.
  - You are about to drop the column `gstin` on the `LabInfo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nablCertificateNo]` on the table `LabInfo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[fssaiRegNo]` on the table `LabInfo` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Lab" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "LabInfo" DROP COLUMN "gstin",
ADD COLUMN     "about" TEXT,
ADD COLUMN     "fssaiRegNo" TEXT,
ADD COLUMN     "isFssaiReg" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "labName" TEXT,
ADD COLUMN     "nablCertificateNo" TEXT,
ADD COLUMN     "nablExp" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "LabInfo_nablCertificateNo_key" ON "LabInfo"("nablCertificateNo");

-- CreateIndex
CREATE UNIQUE INDEX "LabInfo_fssaiRegNo_key" ON "LabInfo"("fssaiRegNo");
