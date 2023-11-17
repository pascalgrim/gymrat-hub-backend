import { Module } from '@nestjs/common';
import { MusclegroupService } from './musclegroup.service';
import { MusclegroupController } from './musclegroup.controller';
import { ExerciseMuscleGroupModule } from './exercise-muscle-group/exercise-muscle-group.module';

@Module({
  controllers: [MusclegroupController],
  providers: [MusclegroupService],
  imports: [ExerciseMuscleGroupModule],
})
export class MusclegroupModule {}
