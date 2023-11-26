import { Controller, Post, Body } from '@nestjs/common';
import { ExerciseDayService } from './exercise-day.service';
import { AddExerciseDayDto } from './dto/addExerciseDay.dto';

@Controller('exercise-day')
export class ExerciseDayController {
  constructor(private readonly exerciseDayService: ExerciseDayService) {}

  @Post()
  addExerciseDay(@Body() addExerciseDayDto: AddExerciseDayDto) {
    return this.exerciseDayService.addExerciseDay(addExerciseDayDto);
  }
}
