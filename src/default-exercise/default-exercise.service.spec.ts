import { Test, TestingModule } from '@nestjs/testing';
import { DefaultExerciseService } from './default-exercise.service';

describe('DefaultExerciseService', () => {
  let service: DefaultExerciseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefaultExerciseService],
    }).compile();

    service = module.get<DefaultExerciseService>(DefaultExerciseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
