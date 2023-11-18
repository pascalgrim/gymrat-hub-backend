import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateWorkoutDto {
  @IsNotEmpty()
  workoutId: number;

  @IsString()
  @IsNotEmpty()
  readonly workoutName: string;
}
