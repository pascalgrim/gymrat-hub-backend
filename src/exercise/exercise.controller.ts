import { Controller, Body, Post, Get } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { AddExerciseDto } from './dto/add-exercise.dto';

@Controller('workout-exercise')
export class ExerciseController {
  constructor(private readonly workoutExerciseService: ExerciseService) {}

  @Post()
  addWorkoutExercise(@Body() addExerciseDto: AddExerciseDto) {
    return this.workoutExerciseService.addWorkoutExercise(addExerciseDto);
  }
}
