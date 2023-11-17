import { Controller } from '@nestjs/common';
import { WorkoutExerciseService } from './workout-exercise.service';

@Controller('workout-exercise')
export class WorkoutExerciseController {
  constructor(private readonly workoutExerciseService: WorkoutExerciseService) {}
}
