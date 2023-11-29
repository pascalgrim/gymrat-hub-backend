import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  isNotEmpty,
  isString,
} from 'class-validator';

export class AddExerciseToWorkout {
  @IsNumber()
  @IsNotEmpty()
  workoutId: number;

  @IsInt()
  @IsNotEmpty()
  exerciseId: number;
}
