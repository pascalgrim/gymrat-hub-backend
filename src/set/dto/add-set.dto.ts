import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class AddSetDto {
  @IsInt()
  @IsNotEmpty()
  workoutExerciseId: number;

  @IsNumber()
  @IsNotEmpty()
  weight: number;

  @IsInt()
  @IsNotEmpty()
  reps: number;
}
