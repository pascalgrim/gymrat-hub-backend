import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { SetService } from './set.service';
import { AddSetDto } from './dto/add-set.dto';
import { UpdateSetDto } from './dto/update-set.dto';

@Controller('set')
export class SetController {
  constructor(private readonly setService: SetService) {}

  @Get(':setId')
  getSet(@Param('setId', ParseIntPipe) setId: number) {
    return this.setService.getSetById(setId);
  }

  @Post()
  addSet(@Body() addSetDto: AddSetDto) {
    return this.setService.addSet(addSetDto);
  }

  @Delete(':setId')
  removeSet(@Param('setId', ParseIntPipe) setId: number) {
    return this.setService.removeSet(setId);
  }

  @Patch()
  updateSet(@Body() updateSetDto: UpdateSetDto) {
    return this.setService.updateSet(updateSetDto);
  }
}
