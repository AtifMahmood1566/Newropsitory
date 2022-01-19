import { Field , ObjectType } from "@nestjs/graphql";

@ObjectType()
export class MarksDto{
    
    @Field()
    readonly userID : string;

    @Field()
    readonly subjectID : string;

    @Field()
    readonly marks : number

    
}