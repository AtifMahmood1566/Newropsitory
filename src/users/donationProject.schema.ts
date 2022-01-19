import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class porjectDonations extends Document{
    
    @Prop()
    name : string;

    @Prop({default : Date.now()})
    startingDate : Date;

    @Prop()
    endingDate : Date;

    @Prop({default : 0})
    prjectAmount : number;

    @Prop({default : 0})
    projectDonation : number;
}

export const porjectDonationsSchema = SchemaFactory.createForClass(porjectDonations);