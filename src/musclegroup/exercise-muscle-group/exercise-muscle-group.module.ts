import { Module } from '@nestjs/common';
import { ExerciseMuscleGroupService } from './exercise-muscle-group.service';
import { ExerciseMuscleGroupController } from './exercise-muscle-group.controller';

@Module({
  controllers: [ExerciseMuscleGroupController],
  providers: [ExerciseMuscleGroupService],
})
export class ExerciseMuscleGroupModule {}
