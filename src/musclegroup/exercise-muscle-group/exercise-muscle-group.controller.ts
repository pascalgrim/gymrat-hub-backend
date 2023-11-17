import { Controller } from '@nestjs/common';
import { ExerciseMuscleGroupService } from './exercise-muscle-group.service';

@Controller('exercise-muscle-group')
export class ExerciseMuscleGroupController {
  constructor(private readonly exerciseMuscleGroupService: ExerciseMuscleGroupService) {}
}
