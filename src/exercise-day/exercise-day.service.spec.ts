import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseDayService } from './exercise-day.service';

describe('ExerciseDayService', () => {
  let service: ExerciseDayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExerciseDayService],
    }).compile();

    service = module.get<ExerciseDayService>(ExerciseDayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
