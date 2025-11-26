-- CreateTable
CREATE TABLE "Processor" (
    "id" TEXT NOT NULL,
    "processorId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "address" TEXT,
    "organization" TEXT,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "status" "StatusType",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Processor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProcessingPlantInfo" (
    "id" TEXT NOT NULL,
    "processorID" TEXT NOT NULL,
    "estb" TEXT NOT NULL,
    "GSTIN" TEXT NOT NULL,
    "Storage" TEXT NOT NULL,
    "herbs" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProcessingPlantInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProcessorInventory" (
    "id" TEXT NOT NULL,
    "processorID" TEXT NOT NULL,
    "inventoryName" TEXT NOT NULL,
    "assignedGrade" TEXT NOT NULL,
    "isprocessingDone" BOOLEAN NOT NULL DEFAULT false,
    "processinglist" TEXT,
    "specie" TEXT NOT NULL,
    "finalQuantity" TEXT NOT NULL,
    "sendedToLab" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProcessorInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProcessorFarmerInput" (
    "id" TEXT NOT NULL,
    "inventoryID" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "specie" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProcessorFarmerInput_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Processor_processorId_key" ON "Processor"("processorId");

-- CreateIndex
CREATE UNIQUE INDEX "Processor_email_key" ON "Processor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ProcessingPlantInfo_processorID_key" ON "ProcessingPlantInfo"("processorID");

-- CreateIndex
CREATE UNIQUE INDEX "ProcessorFarmerInput_eventId_key" ON "ProcessorFarmerInput"("eventId");

-- AddForeignKey
ALTER TABLE "ProcessingPlantInfo" ADD CONSTRAINT "ProcessingPlantInfo_processorID_fkey" FOREIGN KEY ("processorID") REFERENCES "Processor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProcessorInventory" ADD CONSTRAINT "ProcessorInventory_processorID_fkey" FOREIGN KEY ("processorID") REFERENCES "Processor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProcessorFarmerInput" ADD CONSTRAINT "ProcessorFarmerInput_inventoryID_fkey" FOREIGN KEY ("inventoryID") REFERENCES "ProcessorInventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
