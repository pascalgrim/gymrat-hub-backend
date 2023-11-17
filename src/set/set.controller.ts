import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { SetService } from './set.service';

@Controller('set')
export class SetController {
  constructor(private readonly setService: SetService) {}

  @Get()
  getSet() {
    return this.setService.getSet();
  }

  @Post()
  addSet() {
    return this.setService.addSet();
  }

  @Delete()
  removeSet() {
    return this.setService.removeSet();
  }

  @Patch()
  updateSet() {
    return this.setService.updateSet();
  }
}
