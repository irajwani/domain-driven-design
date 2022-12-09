import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Menu as MongooseModel } from 'mongoose';
import { IMenu, MenuDocument } from '../../Schemas/Menu.schema';
import { EntityRepository } from '../../Configurations/Database/abstract-entity-repository';

@Injectable()
export class MenuRepository extends EntityRepository<MenuDocument> {
  constructor(@InjectModel(IMenu.name) Menu: MongooseModel<MenuDocument>) {
    super(Menu);
  }
}
