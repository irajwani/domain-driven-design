import { Prop } from '@nestjs/mongoose';

export default abstract class BaseSchema {
  @Prop({ required: true })
  readonly _id: string;
}
