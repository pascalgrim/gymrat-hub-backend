import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { SetService } from './set.service';
import { AddSetDto } from './dto/add-set.dto';

@Controller('set')
export class SetController {
  constructor(private readonly setService: SetService) {}

  @Get()
  getSet() {
    return this.setService.getSet();
  }

  @Post()
  addSet(@Body() addSetDto: AddSetDto) {
    return this.setService.addSet(addSetDto);
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
