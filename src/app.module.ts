import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Users , UserSchema} from './users/user.schema';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, GraphQLModule.forRoot({
    autoSchemaFile: 'schema.gql',
    playground : true,
    introspection : true,
  }),
  MongooseModule.forRoot('mongodb+srv://atif:dbUserPassword@cluster0.x15aw.mongodb.net/ngm?retryWrites=true&w=majority'),
  MongooseModule.forFeature([{
  name: Users.name, schema: UserSchema
}])
],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
