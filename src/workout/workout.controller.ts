import { Controller, Post, Delete, Body } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { DeleteWorkoutDto } from './dto/delete-workout.dto';

@Controller('workout')
export class WorkoutController {
  constructor(private readonly workoutService: WorkoutService) {}

  @Post()
  createWorkout(@Body() createWorkoutDto: CreateWorkoutDto) {
    return this.workoutService.createWorkout(createWorkoutDto);
  }

  @Delete()
  deleteWorkout(@Body() deleteWorkoutDto: DeleteWorkoutDto) {
    return this.workoutService.deleteWorkout(deleteWorkoutDto);
  }
}
