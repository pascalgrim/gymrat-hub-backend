import { Module } from '@nestjs/common';
import { UserExerciseService } from './user-exercise.service';
import { UserExerciseController } from './user-exercise.controller';

@Module({
  controllers: [UserExerciseController],
  providers: [UserExerciseService],
})
export class UserExerciseModule {}
