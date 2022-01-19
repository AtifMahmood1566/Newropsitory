import {Prop , Schema , SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Subjects extends Document{

    @Prop()
    name : string;

}

export const SubjectSchema = SchemaFactory.createForClass(Subjects);