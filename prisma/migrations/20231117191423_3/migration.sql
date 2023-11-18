/*
  Warnings:

  - You are about to drop the `DefaultExercise` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ExerciseMuscleGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MuscleGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Set` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserExercise` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Workout` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WorkoutExercise` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ExerciseMuscleGroup" DROP CONSTRAINT "ExerciseMuscleGroup_musclegroup_id_fkey";

-- DropForeignKey
ALTER TABLE "ExerciseMuscleGroup" DROP CONSTRAINT "ExerciseMuscleGroup_workout_exercise_id_fkey";

-- DropForeignKey
ALTER TABLE "Set" DROP CONSTRAINT "Set_workout_exercise_id_fkey";

-- DropForeignKey
ALTER TABLE "UserExercise" DROP CONSTRAINT "UserExercise_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Workout" DROP CONSTRAINT "Workout_user_id_fkey";

-- DropForeignKey
ALTER TABLE "WorkoutExercise" DROP CONSTRAINT "WorkoutExercise_user_id_fkey";

-- DropForeignKey
ALTER TABLE "WorkoutExercise" DROP CONSTRAINT "WorkoutExercise_workout_id_fkey";

-- DropTable
DROP TABLE "DefaultExercise";

-- DropTable
DROP TABLE "ExerciseMuscleGroup";

-- DropTable
DROP TABLE "MuscleGroup";

-- DropTable
DROP TABLE "Set";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "UserExercise";

-- DropTable
DROP TABLE "Workout";

-- DropTable
DROP TABLE "WorkoutExercise";

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "workouts" (
    "workout_id" SERIAL NOT NULL,
    "workout_name" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "workouts_pkey" PRIMARY KEY ("workout_id")
);

-- CreateTable
CREATE TABLE "defaultExercises" (
    "default_exercise_id" SERIAL NOT NULL,
    "exercise_name" TEXT NOT NULL,

    CONSTRAINT "defaultExercises_pkey" PRIMARY KEY ("default_exercise_id")
);

-- CreateTable
CREATE TABLE "userExercises" (
    "user_exercise_id" SERIAL NOT NULL,
    "exercise_name" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userExercises_pkey" PRIMARY KEY ("user_exercise_id")
);

-- CreateTable
CREATE TABLE "workoutExercises" (
    "workout_exercise_id" SERIAL NOT NULL,
    "workout_id" INTEGER NOT NULL,
    "exercise_name" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "workoutExercises_pkey" PRIMARY KEY ("workout_exercise_id")
);

-- CreateTable
CREATE TABLE "sets" (
    "set_id" SERIAL NOT NULL,
    "workout_exercise_id" INTEGER NOT NULL,

    CONSTRAINT "sets_pkey" PRIMARY KEY ("set_id")
);

-- CreateTable
CREATE TABLE "musclegroups" (
    "musclegroup_id" SERIAL NOT NULL,
    "musclegroup_name" TEXT NOT NULL,

    CONSTRAINT "musclegroups_pkey" PRIMARY KEY ("musclegroup_id")
);

-- CreateTable
CREATE TABLE "exerciseMuscleGroups" (
    "workout_exercise_id" INTEGER NOT NULL,
    "musclegroup_id" INTEGER NOT NULL,
    "intensity" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "exerciseMuscleGroups_workout_exercise_id_musclegroup_id_key" ON "exerciseMuscleGroups"("workout_exercise_id", "musclegroup_id");

-- AddForeignKey
ALTER TABLE "workouts" ADD CONSTRAINT "workouts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userExercises" ADD CONSTRAINT "userExercises_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workoutExercises" ADD CONSTRAINT "workoutExercises_workout_id_fkey" FOREIGN KEY ("workout_id") REFERENCES "workouts"("workout_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workoutExercises" ADD CONSTRAINT "workoutExercises_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sets" ADD CONSTRAINT "sets_workout_exercise_id_fkey" FOREIGN KEY ("workout_exercise_id") REFERENCES "workoutExercises"("workout_exercise_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exerciseMuscleGroups" ADD CONSTRAINT "exerciseMuscleGroups_workout_exercise_id_fkey" FOREIGN KEY ("workout_exercise_id") REFERENCES "workoutExercises"("workout_exercise_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exerciseMuscleGroups" ADD CONSTRAINT "exerciseMuscleGroups_musclegroup_id_fkey" FOREIGN KEY ("musclegroup_id") REFERENCES "musclegroups"("musclegroup_id") ON DELETE RESTRICT ON UPDATE CASCADE;
