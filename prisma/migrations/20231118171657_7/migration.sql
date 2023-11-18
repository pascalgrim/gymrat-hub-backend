/*
  Warnings:

  - You are about to drop the column `workoutWorkout_id` on the `exercises` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "exercises" DROP CONSTRAINT "exercises_workoutWorkout_id_fkey";

-- AlterTable
ALTER TABLE "exercises" DROP COLUMN "workoutWorkout_id",
ADD COLUMN     "workout_id" INTEGER;

-- AddForeignKey
ALTER TABLE "exercises" ADD CONSTRAINT "exercises_workout_id_fkey" FOREIGN KEY ("workout_id") REFERENCES "workouts"("workout_id") ON DELETE SET NULL ON UPDATE CASCADE;
