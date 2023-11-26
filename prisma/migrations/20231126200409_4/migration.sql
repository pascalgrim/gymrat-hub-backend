/*
  Warnings:

  - You are about to drop the column `date` on the `exercises` table. All the data in the column will be lost.
  - Added the required column `date` to the `exerciseDays` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "exerciseDays" ADD COLUMN     "date" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "exercises" DROP COLUMN "date";
