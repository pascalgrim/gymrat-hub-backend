import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class AddExerciseToWorkoutDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsInt()
  @IsNotEmpty()
  workoutId: number;

  @IsString()
  @IsNotEmpty()
  exerciseName: string;
}
