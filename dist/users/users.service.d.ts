import { Model } from 'mongoose';
import { CreateUserInput, FindUserInput, UpdateUSerInput } from './inputs/user.input';
import { Users } from './user.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<Users>);
    findall(): Promise<Users[]>;
    findActiveUsers(): Promise<Users[]>;
    findInActiveUsers(): Promise<Users[]>;
    findBlockedUsers(): Promise<Users[]>;
    findUnblockedUsers(): Promise<Users[]>;
    create(craeteUser: CreateUserInput): Promise<Users>;
    findOne(user: FindUserInput): Promise<Users>;
    update(updateUser: UpdateUSerInput): Promise<Users>;
    adminBlock(updateIsBlock: UpdateUSerInput): Promise<Users>;
    afterFiveEmail(): Promise<Users[]>;
}
