import { Injectable } from '@nestjs/common';
import { formatDateToDDMMYYYY } from 'src/helper/date';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddExerciseDayDto } from './dto/addExerciseDay.dto';
import { ExerciseDay } from '@prisma/client';

@Injectable()
export class ExerciseDayService {
  constructor(private readonly prisma: PrismaService) {}

  async getExerciseDaysByExerciseId(exerciseId: number) {
    const days = await this.prisma.exerciseDay.findMany({
      where: {
        exercise_id: exerciseId,
      },
      include: {
        Sets: true,
      },
    });
    return days;
  }

  async addExerciseDay(dto: AddExerciseDayDto) {
    const currentDate = formatDateToDDMMYYYY(new Date());
    const dayExists = await this.prisma.exerciseDay.findFirst({
      where: {
        date: currentDate,
      },
    });
    if (dayExists) return;
    const day = await this.prisma.exerciseDay.create({
      data: {
        exercise_id: dto.exerciseId,
        date: currentDate,
      },
    });
    return day;
  }

  getLatestDay = (days: ExerciseDay[]) => {
    if (days.length === 0) {
      return null;
    }

    let latestDay = days[0];

    for (let i = 1; i < days.length; i++) {
      if (days[i].createdAt > latestDay.createdAt) {
        latestDay = days[i];
      }
    }

    return latestDay;
  };

  async deleteExerciseDay(exerciseDayId: number) {
    const deletedDay = await this.prisma.exerciseDay.delete({
      where: {
        exercise_day_id: exerciseDayId,
      },
    });
    return deletedDay;
  }

  async getExerciseDayByDate(exerciseId: number, date: string) {
    const days = await this.prisma.exerciseDay.findMany({
      where: {
        exercise_id: exerciseId,
        date: date,
      },
    });
    return days[0];
  }
}
