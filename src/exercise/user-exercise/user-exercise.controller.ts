import { Controller } from '@nestjs/common';
import { UserExerciseService } from './user-exercise.service';

@Controller('user-exercise')
export class UserExerciseController {
  constructor(private readonly userExerciseService: UserExerciseService) {}
}
