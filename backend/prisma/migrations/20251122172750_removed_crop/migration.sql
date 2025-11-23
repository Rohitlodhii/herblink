/*
  Warnings:

  - You are about to drop the `Crop` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Crop" DROP CONSTRAINT "Crop_farmerId_fkey";

-- DropTable
DROP TABLE "Crop";
