/*
  Warnings:

  - You are about to drop the column `herbInventoryId` on the `ProductInventory` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductInventory" DROP CONSTRAINT "ProductInventory_herbInventoryId_fkey";

-- DropIndex
DROP INDEX "ProductInventory_herbInventoryId_key";

-- AlterTable
ALTER TABLE "HerbInventory" ADD COLUMN     "productInventoryId" TEXT;

-- AlterTable
ALTER TABLE "ProductInventory" DROP COLUMN "herbInventoryId";

-- AddForeignKey
ALTER TABLE "HerbInventory" ADD CONSTRAINT "HerbInventory_productInventoryId_fkey" FOREIGN KEY ("productInventoryId") REFERENCES "ProductInventory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
