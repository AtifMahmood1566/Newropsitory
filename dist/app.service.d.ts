import { Model } from 'mongoose';
import { Marks } from './users/marks.schema';
import { Users } from './users/user.schema';
export declare class AppService {
    private userModel;
    private marksModel;
    constructor(userModel: Model<Users>, marksModel: Model<Marks>);
    getHello(): string;
}
