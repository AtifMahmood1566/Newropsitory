import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class PositionDto{

    @Field()
    userID : string;

    @Field()
    marks : number;
    
}