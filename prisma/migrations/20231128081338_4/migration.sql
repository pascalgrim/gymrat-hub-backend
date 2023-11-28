/*
  Warnings:

  - You are about to drop the column `workout_id` on the `exercises` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "exercises" DROP CONSTRAINT "exercises_workout_id_fkey";

-- AlterTable
ALTER TABLE "exercises" DROP COLUMN "workout_id",
ADD COLUMN     "workoutWorkout_id" INTEGER;

-- AddForeignKey
ALTER TABLE "exercises" ADD CONSTRAINT "exercises_workoutWorkout_id_fkey" FOREIGN KEY ("workoutWorkout_id") REFERENCES "workouts"("workout_id") ON DELETE SET NULL ON UPDATE CASCADE;
