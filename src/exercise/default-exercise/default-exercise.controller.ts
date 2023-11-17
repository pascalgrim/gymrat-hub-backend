import { Controller } from '@nestjs/common';
import { DefaultExerciseService } from './default-exercise.service';

@Controller('default-exercise')
export class DefaultExerciseController {
  constructor(private readonly defaultExerciseService: DefaultExerciseService) {}
}
