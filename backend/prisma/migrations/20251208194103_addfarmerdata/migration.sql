-- AlterTable
ALTER TABLE "HerbData" ALTER COLUMN "pesticidesUsed" DROP NOT NULL,
ALTER COLUMN "pesticidesUsed" DROP DEFAULT,
ALTER COLUMN "pesticidesUsed" SET DATA TYPE TEXT;
