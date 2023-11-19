import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddSetDto } from './dto/add-set.dto';
import { UpdateSetDto } from './dto/update-set.dto';

@Injectable()
export class SetService {
  constructor(private readonly prisma: PrismaService) {}
  async addSet(dto: AddSetDto) {
    try {
      const { reps, weight, exerciseId } = dto;
      const set = await this.prisma.set.create({
        data: {
          exercise_id: exerciseId,
          weight,
          reps,
        },
      });
      return set;
    } catch (error) {
      throw new Error(error);
    }
  }
  async removeSet(setId: number) {
    try {
      const set = await this.prisma.set.delete({
        where: {
          set_id: setId,
        },
      });
      return set;
    } catch (error) {
      throw new Error(error);
    }
  }
  async updateSet(dto: UpdateSetDto) {
    try {
      const { reps, weight, setId } = dto;
      const set = await this.prisma.set.update({
        where: {
          set_id: setId,
        },
        data: {
          weight,
          reps,
        },
      });
      return set;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getSetById(setId: number) {
    const set = await this.prisma.set.findUnique({
      where: {
        set_id: setId,
      },
    });
    return set;
  }
}
