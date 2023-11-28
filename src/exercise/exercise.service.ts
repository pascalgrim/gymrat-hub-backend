import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddExerciseDto } from './dto/add-exercise.dto';

@Injectable()
export class ExerciseService {
  constructor(private readonly prisma: PrismaService) {}

  async addExercise(dto: AddExerciseDto) {
    const { exerciseName, userId } = dto;
    try {
      const exercise = await this.prisma.exercise.create({
        data: {
          user_id: userId,
          exercise_name: exerciseName,
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
