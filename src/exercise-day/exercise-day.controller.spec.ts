import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseDayController } from './exercise-day.controller';
import { ExerciseDayService } from './exercise-day.service';

describe('ExerciseDayController', () => {
  let controller: ExerciseDayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExerciseDayController],
      providers: [ExerciseDayService],
    }).compile();

    controller = module.get<ExerciseDayController>(ExerciseDayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
