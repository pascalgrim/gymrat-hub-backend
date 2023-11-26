import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { DeleteWorkoutDto } from './dto/delete-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';

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
      const workout = await this.prisma.workout.delete({
        where: {
          workout_id: workoutId,
          user_id: userId,
        },
      });
      return workout;
    } catch (error) {
      throw new Error('Deleting Workout failed');
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
        Exercises: true,
      },
    });
    return workout;
  }
  async getWorkoutsByUserId(userId: number) {
    const workouts = await this.prisma.workout.findMany({
      where: {
        user_id: userId,
      },
    });
    return workouts;
  }
}
