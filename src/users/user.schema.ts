import {Prop , Schema , SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsString , IsEmail} from 'class-validator';
const uniqueValidator = require('mongoose-unique-validator')

@Schema()
export class Users extends Document{
    @IsString()
    @Prop()
    firstName : string;

    @IsString()
    @Prop()
    lastName : string;

    @Prop()
    DOB : Date;

    @Prop()
    Age : number;

    @Prop({default : "inactive"})
    status : string;

    @IsEmail()
    @Prop({unique : true})
    email : string;
    
    @Prop()
    password : string;

    @Prop()
    isBlock : boolean;
}

export const UserSchema = SchemaFactory.createForClass(Users);
UserSchema.plugin(uniqueValidator)