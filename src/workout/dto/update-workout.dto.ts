import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateWorkoutDto {
  @IsNumber()
  @IsNotEmpty()
  workoutId: number;

  @IsString()
  @IsNotEmpty()
  workoutName: string;
}
