import { IsInt, IsNotEmpty, IsString, isNotEmpty } from 'class-validator';

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

  @IsNotEmpty()
  musclegroupNames: string[];
}
