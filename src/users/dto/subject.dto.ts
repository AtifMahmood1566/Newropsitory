import { Field , ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SubjectDto{
    
    @Field()
    readonly name : string;

}