-- CreateEnum
CREATE TYPE "StatusType" AS ENUM ('pending', 'acknowledge', 'verified', 'rejected');

-- AlterTable
ALTER TABLE "Farmer" ADD COLUMN     "status" "StatusType";
