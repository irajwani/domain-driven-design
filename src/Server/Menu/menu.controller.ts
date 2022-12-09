import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { MenuService } from './Menu.service';
import { CreateMenuDto } from './Validation/create-Menu.dto';
import { UpdateMenuDto } from './Validation/update-Menu.dto';
import { IUpdateMenuResponse } from './Types/update-Menu-response';
import { TResponse } from '../../Common/Types/response';

@Controller('Menu')
export class MenuController {
  constructor(private readonly MenuService: MenuService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.MenuService.create(createMenuDto);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.MenuService.findOne(id);
  }

  @Patch(':id/deltas')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateMenuDto,
    @Res() response: Response,
  ): Promise<TResponse<IUpdateMenuResponse>> {
    await this.MenuService.update(id, body);
    return response
      .status(HttpStatus.OK)
      .json({ message: `Successfully updated Menu with ID: ${id}` });
  }
}
