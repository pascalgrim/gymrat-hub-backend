import { Module } from '@nestjs/common';
import { MusclegroupService } from './musclegroup.service';
import { MusclegroupController } from './musclegroup.controller';
import { ExerciseMuscleGroupModule } from './exercise-muscle-group/exercise-muscle-group.module';
import { ExerciseService } from 'src/exercise/exercise.service';
import { WorkoutService } from 'src/workout/workout.service';

@Module({
  controllers: [MusclegroupController],
  providers: [MusclegroupService, ExerciseService, WorkoutService],
  imports: [ExerciseMuscleGroupModule],
})
export class MusclegroupModule {}
