import {
  Controller,
  Post,
  Delete,
  Get,
  Body,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { DeleteWorkoutDto } from './dto/delete-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';

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

  @Get(':workoutId')
  getWorkoutById(@Param('workoutId', ParseIntPipe) workoutId: number) {
    return this.workoutService.getWorkoutById(workoutId);
  }

  @Patch()
  updateWorkout(@Body() updateWorkout: UpdateWorkoutDto) {
    return this.workoutService.updateWorkout(updateWorkout);
  }

  @Get('/user/:userId')
  getWorkoutByUserId(@Param('userId', ParseIntPipe) userId: number) {
    return this.workoutService.getWorkoutsByUserId(userId);
  }
}
