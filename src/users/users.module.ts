import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UserSchema } from './user.schema';

@Module({
  imports : [MongooseModule.forFeature([{name : Users.name , schema : UserSchema }])],
  providers: [UsersResolver, UsersService]
})
export class UsersModule {}
