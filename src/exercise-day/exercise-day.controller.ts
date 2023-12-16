import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ExerciseDayService } from './exercise-day.service';
import { AddExerciseDayDto } from './dto/addExerciseDay.dto';

@Controller('exercise-day')
export class ExerciseDayController {
  constructor(private readonly exerciseDayService: ExerciseDayService) {}

  @Post()
  addExerciseDay(@Body() addExerciseDayDto: AddExerciseDayDto) {
    return this.exerciseDayService.addExerciseDay(addExerciseDayDto);
  }

  @Get(':exerciseId')
  getExercise(@Param('exerciseId', ParseIntPipe) exerciseId: number) {
    return this.exerciseDayService.getExerciseDaysByExerciseId(exerciseId);
  }
}
