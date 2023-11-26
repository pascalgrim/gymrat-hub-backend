import { IsNotEmpty, IsNumber } from 'class-validator';

export class AddExerciseDayDto {
  @IsNumber()
  @IsNotEmpty()
  exerciseId: number;
}
