import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MuseumsService } from './museums.service';
import { CreateMuseumDto } from './dto/create-museum.dto';
import { UpdateMuseumDto } from './dto/update-museum.dto';

@Controller('museums')
export class MuseumsController {
  constructor(private readonly museumsService: MuseumsService) {}

  @Post()
  create(@Body() createMuseumDto: CreateMuseumDto) {
    return this.museumsService.create(createMuseumDto);
  }

  @Get()
  findAll() {
    return this.museumsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.museumsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMuseumDto: UpdateMuseumDto) {
    return this.museumsService.update(+id, updateMuseumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.museumsService.remove(+id);
  }
}
