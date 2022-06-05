import { prop } from '@typegoose/typegoose';

export class UserEntity {
  @prop()
  firstName?: string;

  @prop()
  lastName: string;

  @prop()
  birthday: Date | string;

  @prop()
  сompanyId: number | null;

  @prop()
  educationId: number;

  @prop()
  regionId: number;

  @prop()
  visible: boolean;
}
