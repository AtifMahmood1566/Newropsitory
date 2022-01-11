import { Document } from 'mongoose';
export declare class Users extends Document {
    firstName: string;
    lastName: string;
    DOB: Date;
    Age: number;
    status: string;
    email: string;
    password: string;
    isBlock: boolean;
}
export declare const UserSchema: import("mongoose").Schema<Users, import("mongoose").Model<Users, any, any, any>, any, any>;
