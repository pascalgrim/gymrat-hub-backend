/*
  Warnings:

  - You are about to drop the column `user_id` on the `workoutExercises` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "workoutExercises" DROP CONSTRAINT "workoutExercises_user_id_fkey";

-- AlterTable
ALTER TABLE "workoutExercises" DROP COLUMN "user_id";
