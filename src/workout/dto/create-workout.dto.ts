import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateWorkoutDto {
  @IsInt()
  @IsNotEmpty()
  readonly userId: number;

  @IsString()
  @IsNotEmpty()
  readonly workoutName: string;
}
