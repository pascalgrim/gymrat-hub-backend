import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddSetDto } from './dto/add-set.dto';

@Injectable()
export class SetService {
  constructor(private readonly prisma: PrismaService) {}
  async addSet(dto: AddSetDto) {
    try {
      const { reps, weight, workoutExerciseId } = dto;
      const set = await this.prisma.set.create({
        data: {
          workout_exercise_id: workoutExerciseId,
          weight,
          reps,
        },
      });
      return set;
    } catch (error) {
      throw new Error(error);
    }
  }
  async removeSet() {}
  async updateSet() {}
  async getSet() {}
}
