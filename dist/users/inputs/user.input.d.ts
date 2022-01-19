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
export declare class CreateSubjectInput {
    readonly name: string;
}
export declare class CreateMarksInput {
    readonly userID: string;
    readonly subjectID: string;
    readonly marks: number;
}
export declare class createProjectInput {
    readonly name: string;
    readonly startingDate: Date;
    readonly endingDate: Date;
    readonly prjectAmount: number;
    readonly projectDonation: number;
}
export declare class FindUserInput {
    readonly _id: string;
}
export declare class updateInputForProjectDonation {
    readonly _id: string;
    readonly projectDonation: number;
}
export declare class FindUserForPercentage {
    readonly userID: string;
}
export declare class findProjectForDonation {
    readonly _id: string;
}
export declare class SendEmail {
    readonly email: string;
}
