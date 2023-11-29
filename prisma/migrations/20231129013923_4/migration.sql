/*
  Warnings:

  - You are about to drop the column `workoutWorkout_id` on the `exercises` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "exercises" DROP CONSTRAINT "exercises_workoutWorkout_id_fkey";

-- AlterTable
ALTER TABLE "exercises" DROP COLUMN "workoutWorkout_id";

-- CreateTable
CREATE TABLE "ExerciseInWorkout" (
    "exercise_id" INTEGER NOT NULL,
    "workout_id" INTEGER NOT NULL,

    CONSTRAINT "ExerciseInWorkout_pkey" PRIMARY KEY ("exercise_id","workout_id")
);

-- AddForeignKey
ALTER TABLE "ExerciseInWorkout" ADD CONSTRAINT "ExerciseInWorkout_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercises"("exercise_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseInWorkout" ADD CONSTRAINT "ExerciseInWorkout_workout_id_fkey" FOREIGN KEY ("workout_id") REFERENCES "workouts"("workout_id") ON DELETE RESTRICT ON UPDATE CASCADE;
