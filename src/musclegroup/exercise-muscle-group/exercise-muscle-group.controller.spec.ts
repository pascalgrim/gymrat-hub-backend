import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseMuscleGroupController } from './exercise-muscle-group.controller';
import { ExerciseMuscleGroupService } from './exercise-muscle-group.service';

describe('ExerciseMuscleGroupController', () => {
  let controller: ExerciseMuscleGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExerciseMuscleGroupController],
      providers: [ExerciseMuscleGroupService],
    }).compile();

    controller = module.get<ExerciseMuscleGroupController>(ExerciseMuscleGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
