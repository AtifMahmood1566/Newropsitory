import {Prop , Schema , SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Marks extends Document{

    @Prop()
    userID : string;

    @Prop()
    subjectID : string;

    @Prop()
    marks : number

}

export const MarksSchema = SchemaFactory.createForClass(Marks);