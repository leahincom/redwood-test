/*
  Warnings:

  - You are about to drop the column `body` on the `CardItem` table. All the data in the column will be lost.
  - Added the required column `description` to the `CardItem` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Color" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cardItemId" TEXT,
    CONSTRAINT "Color_cardItemId_fkey" FOREIGN KEY ("cardItemId") REFERENCES "CardItem" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CardItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "published" BOOLEAN NOT NULL
);
INSERT INTO "new_CardItem" ("createdAt", "id", "published", "title") SELECT "createdAt", "id", "published", "title" FROM "CardItem";
DROP TABLE "CardItem";
ALTER TABLE "new_CardItem" RENAME TO "CardItem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
