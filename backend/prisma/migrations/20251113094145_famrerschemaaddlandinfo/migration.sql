-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('INCOME_CERTIFICATE', 'FARMER_PHOTOGRAPH', 'LAND_CERTIFICATE');

-- CreateTable
CREATE TABLE "Farmer" (
    "id" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "mobileNumberVerified" BOOLEAN NOT NULL DEFAULT false,
    "farmerID" TEXT,
    "password" TEXT,
    "fullName" TEXT,
    "dob" TIMESTAMP(3),
    "address" TEXT,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "isProfileCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Farmer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LandInfo" (
    "id" TEXT NOT NULL,
    "totalHectare" DOUBLE PRECISION NOT NULL,
    "khasraNumber" TEXT NOT NULL,
    "coordinates" JSONB,
    "farmerID" TEXT NOT NULL,

    CONSTRAINT "LandInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL,
    "type" "DocumentType" NOT NULL,
    "url" TEXT NOT NULL,
    "farmerID" TEXT NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Crop" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "farmerId" TEXT NOT NULL,

    CONSTRAINT "Crop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OTP" (
    "id" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "otp" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OTP_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Farmer_mobileNumber_key" ON "Farmer"("mobileNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Farmer_farmerID_key" ON "Farmer"("farmerID");

-- CreateIndex
CREATE UNIQUE INDEX "LandInfo_farmerID_key" ON "LandInfo"("farmerID");

-- AddForeignKey
ALTER TABLE "LandInfo" ADD CONSTRAINT "LandInfo_farmerID_fkey" FOREIGN KEY ("farmerID") REFERENCES "Farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_farmerID_fkey" FOREIGN KEY ("farmerID") REFERENCES "Farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Crop" ADD CONSTRAINT "Crop_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "Farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
