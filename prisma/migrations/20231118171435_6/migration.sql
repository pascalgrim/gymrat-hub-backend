/*
  Warnings:

  - You are about to drop the column `workout_exercise_id` on the `exerciseMuscleGroups` table. All the data in the column will be lost.
  - You are about to drop the column `workout_exercise_id` on the `sets` table. All the data in the column will be lost.
  - You are about to drop the `userExercises` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `workoutExercises` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[exercise_id,musclegroup_id]` on the table `exerciseMuscleGroups` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `exercise_id` to the `exerciseMuscleGroups` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exercise_id` to the `sets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "exerciseMuscleGroups" DROP CONSTRAINT "exerciseMuscleGroups_workout_exercise_id_fkey";

-- DropForeignKey
ALTER TABLE "sets" DROP CONSTRAINT "sets_workout_exercise_id_fkey";

-- DropForeignKey
ALTER TABLE "userExercises" DROP CONSTRAINT "userExercises_user_id_fkey";

-- DropForeignKey
ALTER TABLE "workoutExercises" DROP CONSTRAINT "workoutExercises_workout_id_fkey";

-- DropIndex
DROP INDEX "exerciseMuscleGroups_workout_exercise_id_musclegroup_id_key";

-- AlterTable
ALTER TABLE "exerciseMuscleGroups" DROP COLUMN "workout_exercise_id",
ADD COLUMN     "exercise_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "sets" DROP COLUMN "workout_exercise_id",
ADD COLUMN     "exercise_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "userExercises";

-- DropTable
DROP TABLE "workoutExercises";

-- CreateTable
CREATE TABLE "exercises" (
    "exercise_id" SERIAL NOT NULL,
    "exercise_name" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "workoutWorkout_id" INTEGER,

    CONSTRAINT "exercises_pkey" PRIMARY KEY ("exercise_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "exercises_user_id_exercise_name_key" ON "exercises"("user_id", "exercise_name");

-- CreateIndex
CREATE UNIQUE INDEX "exerciseMuscleGroups_exercise_id_musclegroup_id_key" ON "exerciseMuscleGroups"("exercise_id", "musclegroup_id");

-- AddForeignKey
ALTER TABLE "exercises" ADD CONSTRAINT "exercises_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercises" ADD CONSTRAINT "exercises_workoutWorkout_id_fkey" FOREIGN KEY ("workoutWorkout_id") REFERENCES "workouts"("workout_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sets" ADD CONSTRAINT "sets_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercises"("exercise_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exerciseMuscleGroups" ADD CONSTRAINT "exerciseMuscleGroups_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercises"("exercise_id") ON DELETE RESTRICT ON UPDATE CASCADE;
