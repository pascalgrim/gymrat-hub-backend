import { Injectable } from '@nestjs/common';
import { ExerciseService } from 'src/exercise/exercise.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MusclegroupService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly exerciseService: ExerciseService,
  ) {}
  async getMuscleGroupPercentageOfAllExercisesOfUser(userId: number) {
    const allExercises =
      await this.exerciseService.getExercisesByUserId(userId);
    const arr: string[] = [];

    for (const exercise of allExercises) {
      const musclegroupsOfExercise =
        await this.prisma.exerciseMuscleGroup.findMany({
          where: {
            exercise_id: exercise.exercise_id,
          },
          include: {
            musclegroup: true,
          },
        });

      musclegroupsOfExercise.forEach((me) => {
        arr.push(this.replaceUmlauts(me.musclegroup.musclegroup_name));
      });
    }
    const counted = this.countMuscles(arr);
    return counted;
  }

  private countMuscles(muscles: string[]) {
    const muscleCount = [];

    muscles.forEach((muscle) => {
      const index = muscleCount.findIndex((entry) => entry.name === muscle);
      if (index !== -1) {
        muscleCount[index].count++;
      } else {
        muscleCount.push({ name: muscle, count: 1 });
      }
    });

    return muscleCount;
  }
  private replaceUmlauts(str: string): string {
    const umlautMap: Record<string, string> = {
      ä: 'ae',
      ö: 'oe',
      ü: 'ue',
      ß: 'ss',
    };

    return str.replace(/[äöüß]/g, (match) => umlautMap[match]);
  }
}
