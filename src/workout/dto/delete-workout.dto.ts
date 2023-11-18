import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class DeleteWorkoutDto {
  @IsNotEmpty()
  readonly userId: number;

  @IsNotEmpty()
  readonly workoutId: number;
}
