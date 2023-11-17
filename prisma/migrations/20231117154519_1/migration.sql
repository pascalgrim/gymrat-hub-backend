-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Workout" (
    "workout_id" SERIAL NOT NULL,
    "workout_name" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("workout_id")
);

-- CreateTable
CREATE TABLE "DefaultExercise" (
    "default_exercise_id" SERIAL NOT NULL,
    "exercise_name" TEXT NOT NULL,

    CONSTRAINT "DefaultExercise_pkey" PRIMARY KEY ("default_exercise_id")
);

-- CreateTable
CREATE TABLE "UserExercise" (
    "user_exercise_id" SERIAL NOT NULL,
    "exercise_name" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserExercise_pkey" PRIMARY KEY ("user_exercise_id")
);

-- CreateTable
CREATE TABLE "WorkoutExercise" (
    "workout_exercise_id" SERIAL NOT NULL,
    "workout_id" INTEGER NOT NULL,
    "exercise_name" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkoutExercise_pkey" PRIMARY KEY ("workout_exercise_id")
);

-- CreateTable
CREATE TABLE "Set" (
    "set_id" SERIAL NOT NULL,
    "workout_exercise_id" INTEGER NOT NULL,

    CONSTRAINT "Set_pkey" PRIMARY KEY ("set_id")
);

-- CreateTable
CREATE TABLE "MuscleGroup" (
    "musclegroup_id" SERIAL NOT NULL,
    "musclegroup_name" TEXT NOT NULL,

    CONSTRAINT "MuscleGroup_pkey" PRIMARY KEY ("musclegroup_id")
);

-- CreateTable
CREATE TABLE "ExerciseMuscleGroup" (
    "workout_exercise_id" INTEGER NOT NULL,
    "musclegroup_id" INTEGER NOT NULL,
    "intensity" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ExerciseMuscleGroup_workout_exercise_id_musclegroup_id_key" ON "ExerciseMuscleGroup"("workout_exercise_id", "musclegroup_id");

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserExercise" ADD CONSTRAINT "UserExercise_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutExercise" ADD CONSTRAINT "WorkoutExercise_workout_id_fkey" FOREIGN KEY ("workout_id") REFERENCES "Workout"("workout_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutExercise" ADD CONSTRAINT "WorkoutExercise_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Set" ADD CONSTRAINT "Set_workout_exercise_id_fkey" FOREIGN KEY ("workout_exercise_id") REFERENCES "WorkoutExercise"("workout_exercise_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseMuscleGroup" ADD CONSTRAINT "ExerciseMuscleGroup_workout_exercise_id_fkey" FOREIGN KEY ("workout_exercise_id") REFERENCES "WorkoutExercise"("workout_exercise_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseMuscleGroup" ADD CONSTRAINT "ExerciseMuscleGroup_musclegroup_id_fkey" FOREIGN KEY ("musclegroup_id") REFERENCES "MuscleGroup"("musclegroup_id") ON DELETE RESTRICT ON UPDATE CASCADE;
