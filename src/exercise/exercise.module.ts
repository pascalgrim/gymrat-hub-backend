import { Module } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ExerciseController } from './exercise.controller';
import { WorkoutService } from 'src/workout/workout.service';

@Module({
  controllers: [ExerciseController],
  providers: [ExerciseService, WorkoutService],
})
export class ExerciseModule {}
