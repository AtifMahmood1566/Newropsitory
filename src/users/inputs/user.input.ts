import { Field , InputType } from "@nestjs/graphql";
import { IsAlpha, IsEmail, IsString, Matches, MinLength } from "class-validator";

@InputType()
export class CreateUserInput{
    
    @IsString()
    @IsAlpha()
    @Field()
    readonly firstName : string;

    @Field()
    @IsString()
    @IsAlpha()
    readonly lastName : string;

    @Field()
    readonly DOB : Date;

    @Field()
    @IsEmail()
    readonly email : string;
    
    @MinLength( 8, { each: true } )
    @Field()
    @Matches('(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])')
    readonly password : string;

    @Field({nullable : true})
    readonly status : string;

    @Field()
    readonly isBlock : boolean;
}

@InputType()
export class UpdateUSerInput{

    @Field()
    readonly _id : string;

    @Field({nullable : true})
    readonly firstName : string;

    @Field({nullable : true})
    readonly lastName : string;

    @Field({nullable : true})
    readonly DOB : Date;

    @Field({nullable : true})
    readonly email : string;
    
    @Field({nullable : true})
    readonly password : string;

    

    @Field({nullable : true})
    readonly isBlock : boolean;
}

@InputType()
export class CreateSubjectInput{
    @Field()
    readonly name : string;
}

@InputType()
export class CreateMarksInput{
    @Field()
    readonly userID : string;

    @Field()
    readonly subjectID : string;

    @Field()
    readonly marks : number
}

@InputType()
export class createProjectInput{

    @Field({nullable : true})
    readonly name : string;

    @Field({nullable : true})
    readonly startingDate : Date;

    @Field()
    readonly endingDate : Date;

    @Field({nullable : true})
    readonly prjectAmount : number;
    
}

@InputType()
export class FindUserInput{
    @Field()
    readonly _id : string;
}

@InputType()
export class FindUserForPercentage{
    @Field()
    readonly userID : string;
}

@InputType()
export class findProjectForDonation{

    @Field()
    readonly _id : string;
    
}

@InputType()
export class SendEmail{
    @Field()
    readonly email: string;
}