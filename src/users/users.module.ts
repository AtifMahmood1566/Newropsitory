import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UserSchema } from './user.schema';
import { Subjects, SubjectSchema } from './subject.schema';
import { Marks, MarksSchema } from './marks.schema';
import { porjectDonations, porjectDonationsSchema } from './donationProject.schema';

@Module({
  imports : [MongooseModule.forFeature([
    {name : Users.name , schema : UserSchema } , 
    {name : Subjects.name , schema : SubjectSchema},
    {name : Marks.name , schema : MarksSchema},
    {name : porjectDonations.name , schema : porjectDonationsSchema}])],
  providers: [UsersResolver, UsersService]
})
export class UsersModule {}
