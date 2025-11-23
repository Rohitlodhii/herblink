-- CreateEnum
CREATE TYPE "RoleType" AS ENUM ('ADMIN', 'WORKER');

-- CreateEnum
CREATE TYPE "orgType" AS ENUM ('GOVT', 'PVT');

-- AlterTable
ALTER TABLE "Farmer" ALTER COLUMN "dob" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "Lab" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "labId" TEXT,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "LabInfo" (
    "id" TEXT NOT NULL,
    "labID" TEXT NOT NULL,
    "address" TEXT,
    "gstin" TEXT,
    "type" "orgType"
);

-- CreateTable
CREATE TABLE "LabWorker" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "workerId" TEXT NOT NULL,
    "role" "RoleType" NOT NULL,
    "desc" TEXT,
    "labID" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Lab_id_key" ON "Lab"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Lab_labId_key" ON "Lab"("labId");

-- CreateIndex
CREATE UNIQUE INDEX "Lab_password_key" ON "Lab"("password");

-- CreateIndex
CREATE UNIQUE INDEX "Lab_email_key" ON "Lab"("email");

-- CreateIndex
CREATE UNIQUE INDEX "LabInfo_id_key" ON "LabInfo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "LabInfo_labID_key" ON "LabInfo"("labID");

-- CreateIndex
CREATE UNIQUE INDEX "LabWorker_id_key" ON "LabWorker"("id");

-- CreateIndex
CREATE UNIQUE INDEX "LabWorker_workerId_key" ON "LabWorker"("workerId");

-- AddForeignKey
ALTER TABLE "LabInfo" ADD CONSTRAINT "LabInfo_labID_fkey" FOREIGN KEY ("labID") REFERENCES "Lab"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabWorker" ADD CONSTRAINT "LabWorker_labID_fkey" FOREIGN KEY ("labID") REFERENCES "Lab"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
