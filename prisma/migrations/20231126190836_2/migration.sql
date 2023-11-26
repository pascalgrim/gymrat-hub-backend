/*
  Warnings:

  - You are about to drop the column `exercise_id` on the `sets` table. All the data in the column will be lost.
  - Added the required column `exercise_day_id` to the `sets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sets" DROP CONSTRAINT "sets_exercise_id_fkey";

-- AlterTable
ALTER TABLE "sets" DROP COLUMN "exercise_id",
ADD COLUMN     "exercise_day_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "exerciseDays" (
    "exercise_day_id" SERIAL NOT NULL,
    "exercise_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "exerciseDays_pkey" PRIMARY KEY ("exercise_day_id")
);

-- AddForeignKey
ALTER TABLE "exerciseDays" ADD CONSTRAINT "exerciseDays_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercises"("exercise_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sets" ADD CONSTRAINT "sets_exercise_day_id_fkey" FOREIGN KEY ("exercise_day_id") REFERENCES "exerciseDays"("exercise_day_id") ON DELETE RESTRICT ON UPDATE CASCADE;
