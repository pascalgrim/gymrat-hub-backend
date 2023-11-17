import { Test, TestingModule } from '@nestjs/testing';
import { UserExerciseService } from './user-exercise.service';

describe('UserExerciseService', () => {
  let service: UserExerciseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserExerciseService],
    }).compile();

    service = module.get<UserExerciseService>(UserExerciseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
