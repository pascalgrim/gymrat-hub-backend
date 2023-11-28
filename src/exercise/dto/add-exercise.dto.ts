import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class AddExerciseDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  // @IsInt()
  // @IsNotEmpty()
  // workoutId: number;

  @IsString()
  @IsNotEmpty()
  exerciseName: string;
}
