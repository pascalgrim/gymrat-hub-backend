import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddExerciseDto } from './dto/add-exercise.dto';

@Injectable()
export class ExerciseService {
  constructor(private readonly prisma: PrismaService) {}

  async addExercise(dto: AddExerciseDto) {
    const { workoutId, exerciseName, userId } = dto;
    try {
      const exercise = await this.prisma.exercise.create({
        data: {
          user_id: userId,
          exercise_name: exerciseName,
          workout_id: workoutId,
        },
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
          include: {
            Sets: true,
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
}
