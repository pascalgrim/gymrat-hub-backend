import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class DeleteWorkoutDto {
  @IsNumber()
  @IsNotEmpty()
  readonly userId: number;

  @IsNumber()
  @IsNotEmpty()
  readonly workoutId: number;
}
