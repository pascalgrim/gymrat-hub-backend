import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddExerciseDto } from './dto/add-exercise.dto';
import { AddExerciseToWorkoutDto } from './dto/add-exercise-to-workout.dto';
import { WorkoutService } from 'src/workout/workout.service';
import { MuscleGroup } from '@prisma/client';

@Injectable()
export class ExerciseService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly workoutService: WorkoutService,
  ) {}

  async addExerciseToUser(dto: AddExerciseDto) {
    const { exerciseName, userId, musclegroupNames } = dto;
    try {
      const exercise = await this.prisma.exercise.create({
        data: {
          user_id: userId,
          exercise_name: exerciseName,
        },
      });
      musclegroupNames.forEach(async (muscle) => {
        const muscleExists = await this.prisma.muscleGroup.findUnique({
          where: { musclegroup_name: muscle },
        });
        let newMuscle: MuscleGroup;
        if (!muscleExists) {
          newMuscle = await this.prisma.muscleGroup.create({
            data: { musclegroup_name: muscle },
          });
        }
        const id = muscleExists
          ? muscleExists.musclegroup_id
          : newMuscle.musclegroup_id;
        await this.prisma.exerciseMuscleGroup.create({
          data: {
            exercise_id: exercise.exercise_id,
            musclegroup_id: id,
          },
        });
      });

      return exercise;
    } catch (error) {
      throw new Error(error);
    }
  }

  async addExerciseToWorkout(dto: AddExerciseToWorkoutDto) {
    const { exerciseName, userId, workoutId, musclegroupNames } = dto;
    try {
      const exercise = await this.prisma.exercise.create({
        data: {
          user_id: userId,
          exercise_name: exerciseName,
        },
      });
      musclegroupNames.forEach(async (muscle) => {
        const muscleExists = await this.prisma.muscleGroup.findUnique({
          where: { musclegroup_name: muscle },
        });
        let newMuscle: MuscleGroup;
        if (!muscleExists) {
          newMuscle = await this.prisma.muscleGroup.create({
            data: { musclegroup_name: muscle },
          });
        }
        const id = muscleExists
          ? muscleExists.musclegroup_id
          : newMuscle.musclegroup_id;
        await this.prisma.exerciseMuscleGroup.create({
          data: {
            exercise_id: exercise.exercise_id,
            musclegroup_id: id,
          },
        });
      });

      const existingWorkout =
        await this.workoutService.getWorkoutById(workoutId);
      const updatedWorkout = this.workoutService.addExerciseToWorkout({
        workoutId,
        exerciseId: exercise.exercise_id,
      });
      return exercise;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getExerciseById(exerciseId: number) {
    const exercise = await this.prisma.exercise.findUnique({
      where: {
        exercise_id: exerciseId,
      },
      include: {
        ExerciseDays: {
          orderBy: {
            createdAt: 'desc',
          },
          include: {
            Sets: {
              orderBy: {
                createdAt: 'asc',
              },
            },
          },
        },
      },
    });
    return exercise;
  }

  async getExerciseSets(exercise_day_id: number) {
    const sets = await this.prisma.set.findMany({
      where: {
        exercise_day_id: exercise_day_id,
      },
    });
    return sets;
  }

  async getExercisesByUserId(userId: number) {
    const exercises = await this.prisma.exercise.findMany({
      where: {
        user_id: userId,
      },
    });
    return exercises;
  }
}
