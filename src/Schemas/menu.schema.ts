import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import BaseSchema from 'src/Configurations/Database/base.schema';

@Schema({ collection: 'menus', timestamps: true })
export class IMenu extends BaseSchema {
  @Prop({ unique: true })
  name: string;

  @Prop()
  items: string[];
}

export type MenuDocument = IMenu & Document;
export const MenuSchema = SchemaFactory.createForClass(IMenu);
