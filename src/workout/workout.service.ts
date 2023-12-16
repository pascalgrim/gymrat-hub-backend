import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { DeleteWorkoutDto } from './dto/delete-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { AddExerciseToWorkout } from './dto/add-exercise-to-workout.dto';

@Injectable()
export class WorkoutService {
  constructor(private readonly prisma: PrismaService) {}
  async createWorkout(createWorkoutDto: CreateWorkoutDto) {
    const { userId, workoutName } = createWorkoutDto;
    try {
      const workout = await this.prisma.workout.create({
        data: {
          workout_name: workoutName,
          user_id: userId,
        },
      });
      return workout;
    } catch (error) {
      throw new Error(error);
    }
  }
  async deleteWorkout(deleteWorkoutDto: DeleteWorkoutDto) {
    const { userId, workoutId } = deleteWorkoutDto;
    try {
      const exerciseInWorkouts = await this.prisma.exerciseInWorkout.deleteMany(
        {
          where: {
            workout_id: workoutId,
          },
        },
      );
      const workout = await this.prisma.workout.delete({
        where: {
          workout_id: workoutId,
          user_id: userId,
        },
      });
      return workout;
    } catch (error) {
      throw new Error(error);
    }
  }
  async updateWorkout(updateWorkoutDto: UpdateWorkoutDto) {
    const { workoutName, workoutId } = updateWorkoutDto;
    try {
      const workout = await this.prisma.workout.update({
        where: {
          workout_id: workoutId,
        },
        data: {
          workout_name: workoutName,
        },
      });
      return workout;
    } catch (error) {
      throw new Error('Updating Workout failed');
    }
  }
  async getWorkoutById(workoutID: number) {
    const workout = await this.prisma.workout.findUnique({
      where: {
        workout_id: workoutID,
      },
      include: {
        exercises: {
          include: {
            exercise: true,
          },
        },
      },
    });
    return workout;
  }
  async getWorkoutsByUserId(userId: number) {
    const workouts = await this.prisma.workout.findMany({
      where: {
        user_id: userId,
      },
      include: {
        exercises: true,
      },
    });
    return workouts;
  }

  async addExerciseToWorkout(dto: AddExerciseToWorkout) {
    const updatedWorkout = await this.prisma.workout.update({
      where: {
        workout_id: dto.workoutId,
      },
      data: {
        exercises: {
          create: {
            exercise_id: dto.exerciseId,
          },
        },
      },
    });
    return updatedWorkout;
  }
}
