import { Module } from '@nestjs/common';
import { ExerciseDayService } from './exercise-day.service';
import { ExerciseDayController } from './exercise-day.controller';

@Module({
  controllers: [ExerciseDayController],
  providers: [ExerciseDayService],
})
export class ExerciseDayModule {}
