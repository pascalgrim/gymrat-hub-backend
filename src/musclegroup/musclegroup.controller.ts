import { Controller, Get, ParseIntPipe, Param } from '@nestjs/common';
import { MusclegroupService } from './musclegroup.service';

@Controller('musclegroup')
export class MusclegroupController {
  constructor(private readonly musclegroupService: MusclegroupService) {}

  @Get(':userId')
  getSet(@Param('userId', ParseIntPipe) userId: number) {
    return this.musclegroupService.getMuscleGroupPercentageOfAllExercisesOfUser(
      userId,
    );
  }
}
