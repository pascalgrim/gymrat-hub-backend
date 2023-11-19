import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateSetDto {
  @IsInt()
  @IsNotEmpty()
  setId: number;

  @IsNumber()
  @IsNotEmpty()
  weight: number;

  @IsInt()
  @IsNotEmpty()
  reps: number;
}
