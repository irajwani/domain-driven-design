import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';
import {
  CreateMenuDto,
  ICreateMenuResponse,
} from './Validation/create-Menu.dto';
import { UpdateMenuDto } from './Validation/update-Menu.dto';
import {
  InternalServerException,
  InvalidAssociationException,
  MongoCastToObjectIdFailedException,
  MongooseErrorCodes,
} from '../../Common/Errors';
import { MenuRepository } from './Menu.repository';
import { Connection, UpdateQuery } from 'mongoose';
import { IMenu } from '../../Schemas/Menu.schema';
import { IAssociation } from './Types/association';
import { IEntity } from './Types/entity';
import { ERRORS } from '../../Common/Errors/messages';
import MenuLogic from './Menu.logic';
import { DatabaseService } from '../../Configurations/Database/database.service';

@Injectable()
export class MenuService {
  constructor(
    private readonly MenuRepository: MenuRepository,
    private readonly databaseService: DatabaseService,
  ) {}

  private readonly dbConnection: Connection =
    this.databaseService.getDbHandle();
}
