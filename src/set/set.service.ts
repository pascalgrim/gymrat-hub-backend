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
      const { reps, weight, exerciseId } = dto;
      console.log('A');
      const currentDate = formatDateToDDMMYYYY(new Date());
      const days =
        await this.exerciseDayService.getExerciseDaysByExerciseId(exerciseId);
      const latestDay = this.exerciseDayService.getLatestDay(days);
      let exerciseDay: ExerciseDay = latestDay;
      console.log('B', latestDay);
      if (!latestDay) {
        exerciseDay = await this.exerciseDayService.addExerciseDay({
          exerciseId,
        });
      } else {
        if (currentDate !== latestDay.date) {
          exerciseDay = await this.exerciseDayService.addExerciseDay({
            exerciseId,
          });
        }
      }

      const set = await this.prisma.set.create({
        data: {
          exercise_day_id: exerciseDay.exercise_day_id,
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
