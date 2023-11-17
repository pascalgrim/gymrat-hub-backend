import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseMuscleGroupService } from './exercise-muscle-group.service';

describe('ExerciseMuscleGroupService', () => {
  let service: ExerciseMuscleGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExerciseMuscleGroupService],
    }).compile();

    service = module.get<ExerciseMuscleGroupService>(ExerciseMuscleGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
