import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddExerciseDto } from './dto/add-exercise.dto';

@Injectable()
export class ExerciseService {
  constructor(private readonly prisma: PrismaService) {}

  async addWorkoutExercise(dto: AddExerciseDto) {
    const { workoutId, exerciseName, userId } = dto;
    try {
      const workout = await this.prisma.exercise.create({
        data: {
          user_id: userId,
          exercise_name: exerciseName,
          workout_id: workoutId,
        },
      });
      return workout;
    } catch (error) {
      throw new Error(error);
    }
  }
}
