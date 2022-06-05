import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserEntity) private readonly userModel: ReturnModelType<typeof UserEntity>,
  ) {}

  async createCustomUser(user: UserEntity) {
    console.log(user, 'user- - - ');
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

  async listUsers(): Promise<UserEntity[] | null> {
    return await this.userModel.find().exec();
  }

  async getUser(id: string) {
    return await this.userModel.findById(id).exec();
  }
}
