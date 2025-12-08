/*
  Warnings:

  - A unique constraint covering the columns `[aadharNumber]` on the table `Farmer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[kisanCardNumber]` on the table `LandInfo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "FarmerType" AS ENUM ('WILDCOLLECTOR', 'FARMER');

-- AlterTable
ALTER TABLE "Farmer" ADD COLUMN     "aadharNumber" TEXT,
ADD COLUMN     "annualIncome" TEXT,
ADD COLUMN     "farmerType" "FarmerType" NOT NULL DEFAULT 'FARMER',
ADD COLUMN     "fatherName" TEXT,
ADD COLUMN     "gender" TEXT;

-- AlterTable
ALTER TABLE "LandInfo" ADD COLUMN     "kisanCardNumber" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Farmer_aadharNumber_key" ON "Farmer"("aadharNumber");

-- CreateIndex
CREATE UNIQUE INDEX "LandInfo_kisanCardNumber_key" ON "LandInfo"("kisanCardNumber");
