export declare class CreateUserInput {
    readonly firstName: string;
    readonly lastName: string;
    readonly DOB: Date;
    readonly email: string;
    readonly password: string;
    readonly status: string;
    readonly isBlock: boolean;
}
export declare class UpdateUSerInput {
    readonly _id: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly DOB: Date;
    readonly email: string;
    readonly password: string;
    readonly isBlock: boolean;
}
export declare class FindUserInput {
    readonly _id: string;
}
export declare class SendEmail {
    readonly email: string;
}
