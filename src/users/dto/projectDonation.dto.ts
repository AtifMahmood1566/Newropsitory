import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class projectDonationDto{

    @Field()
    readonly name : string;

    @Field()
    readonly startingDate : Date;

    @Field()
    readonly endingDate : Date;

    @Field()
    readonly prjectAmount : number;
}