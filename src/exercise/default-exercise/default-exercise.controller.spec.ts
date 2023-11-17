import { Test, TestingModule } from '@nestjs/testing';
import { DefaultExerciseController } from './default-exercise.controller';
import { DefaultExerciseService } from './default-exercise.service';

describe('DefaultExerciseController', () => {
  let controller: DefaultExerciseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DefaultExerciseController],
      providers: [DefaultExerciseService],
    }).compile();

    controller = module.get<DefaultExerciseController>(DefaultExerciseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
