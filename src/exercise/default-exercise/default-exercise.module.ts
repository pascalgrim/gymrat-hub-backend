import { Module } from '@nestjs/common';
import { DefaultExerciseService } from './default-exercise.service';
import { DefaultExerciseController } from './default-exercise.controller';

@Module({
  controllers: [DefaultExerciseController],
  providers: [DefaultExerciseService],
})
export class DefaultExerciseModule {}
