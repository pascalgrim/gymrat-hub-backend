import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { AddExerciseDto } from './dto/add-exercise.dto';

@Controller('exercise')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Post()
  addExercise(@Body() addExerciseDto: AddExerciseDto) {
    return this.exerciseService.addExercise(addExerciseDto);
  }

  @Get(':exerciseId')
  getExercise(@Param('exerciseId', ParseIntPipe) exerciseId: number) {
    return this.exerciseService.getExerciseById(exerciseId);
  }

  @Get('/sets/:exerciseId')
  getExerciseSets(@Param('exerciseDayId', ParseIntPipe) exerciseDayId: number) {
    return this.exerciseService.getExerciseSets(exerciseDayId);
  }

  @Get('/user/:userId')
  getExercisesByUserId(@Param('userId', ParseIntPipe) userId: number) {
    return this.exerciseService.getExercisesByUserId(userId);
  }
}
