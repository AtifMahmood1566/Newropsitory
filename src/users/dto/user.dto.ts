import { Field , ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserDto{
    // @Field()
    // readonly _id : string;

    @Field()
    readonly firstName : string;

    @Field()
    readonly lastName : string;

    @Field()
    readonly DOB : Date;

    @Field()
    readonly Age : number;

    @Field()
    readonly status : string;

    @Field()
    readonly email : string;
    
    @Field()
    readonly password : string;

    @Field()
    readonly isBlock : boolean;
}