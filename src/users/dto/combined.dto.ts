import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CombinedDto{

    @Field()
    userID : [string];

    @Field()
    marks : [number];
    
}