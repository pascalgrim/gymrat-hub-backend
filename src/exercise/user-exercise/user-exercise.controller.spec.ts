import { Test, TestingModule } from '@nestjs/testing';
import { UserExerciseController } from './user-exercise.controller';
import { UserExerciseService } from './user-exercise.service';

describe('UserExerciseController', () => {
  let controller: UserExerciseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserExerciseController],
      providers: [UserExerciseService],
    }).compile();

    controller = module.get<UserExerciseController>(UserExerciseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
