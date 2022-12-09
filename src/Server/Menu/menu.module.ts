import { Module } from '@nestjs/common';
import { MenuService } from './Menu.service';
import { MenuController } from './Menu.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { IMenu, MenuSchema } from '../../Schemas/Menu.schema';
import { MenuRepository } from './Menu.repository';
import { DatabaseService } from '../../Configurations/Database/database.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: IMenu.name, schema: MenuSchema }]),
  ],
  controllers: [MenuController],
  providers: [MenuService, MenuRepository, DatabaseService],
})
export class MenuModule {}
