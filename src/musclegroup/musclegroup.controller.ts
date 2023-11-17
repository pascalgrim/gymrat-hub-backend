import { Controller } from '@nestjs/common';
import { MusclegroupService } from './musclegroup.service';

@Controller('musclegroup')
export class MusclegroupController {
  constructor(private readonly musclegroupService: MusclegroupService) {}
}
