import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddSetDto } from './dto/add-set.dto';
import { UpdateSetDto } from './dto/update-set.dto';
import { ExerciseDayService } from 'src/exercise-day/exercise-day.service';
import { formatDateToDDMMYYYY } from 'src/helper/date';
import { ExerciseDay } from '@prisma/client';

@Injectable()
export class SetService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly exerciseDayService: ExerciseDayService,
  ) {}
  async addSet(dto: AddSetDto) {
    try {
      const { reps, weight, exerciseId, date } = dto;
      let day = await this.exerciseDayService.getExerciseDayByDate(
        exerciseId,
        date,
      );
      console.log('day1', day);
      if (!day) {
        day = await this.exerciseDayService.addExerciseDay({ exerciseId });
      }
      console.log('day2', day);
      const set = await this.prisma.set.create({
        data: {
          exercise_day_id: day.exercise_day_id,
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
      const leftSets = await this.getSetsOfExerciseDay(set.exercise_day_id);
      if (leftSets.length < 1) {
        this.exerciseDayService.deleteExerciseDay(set.exercise_day_id);
      }
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

  private async getSetsOfExerciseDay(exerciseDayId: number) {
    const exerciseDay = await this.prisma.exerciseDay.findUnique({
      where: {
        exercise_day_id: exerciseDayId,
      },
      include: {
        Sets: true,
      },
    });
    return exerciseDay.Sets;
  }
}
