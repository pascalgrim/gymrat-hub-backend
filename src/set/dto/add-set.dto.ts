import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddSetDto {
  @IsInt()
  @IsNotEmpty()
  exerciseId: number;

  @IsNumber()
  @IsNotEmpty()
  weight: number;

  @IsInt()
  @IsNotEmpty()
  reps: number;

  @IsString()
  @IsNotEmpty()
  date: string;
}
