import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PercentageDto{

    @Field()
    percentage : number;
    
}