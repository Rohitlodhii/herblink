-- CreateTable
CREATE TABLE "HerbData" (
    "id" TEXT NOT NULL,
    "herbname" TEXT NOT NULL,
    "harvestDate" TEXT NOT NULL,
    "coordinates" TEXT NOT NULL,
    "pesticidesUsed" BOOLEAN NOT NULL DEFAULT false,
    "quantity" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "farmerID" TEXT NOT NULL,

    CONSTRAINT "HerbData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "HerbData" ADD CONSTRAINT "HerbData_farmerID_fkey" FOREIGN KEY ("farmerID") REFERENCES "Farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
