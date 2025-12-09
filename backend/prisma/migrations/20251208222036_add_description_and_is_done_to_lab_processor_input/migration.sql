-- AlterTable
ALTER TABLE "LabProcessorInput" ADD COLUMN     "description" TEXT,
ADD COLUMN     "isDone" BOOLEAN NOT NULL DEFAULT false;
