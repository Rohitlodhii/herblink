-- CreateTable
CREATE TABLE "Complaint" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "complaintType" TEXT NOT NULL,
    "complaintImage" TEXT,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Complaint_pkey" PRIMARY KEY ("id")
);
