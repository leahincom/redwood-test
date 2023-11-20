/*
  Warnings:

  - You are about to drop the `_CardItemToCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_CardItemToCategory";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "CardItemsInCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cardItemId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    CONSTRAINT "CardItemsInCategory_cardItemId_fkey" FOREIGN KEY ("cardItemId") REFERENCES "CardItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CardItemsInCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "CardItemsInCategory_cardItemId_categoryId_key" ON "CardItemsInCategory"("cardItemId", "categoryId");
