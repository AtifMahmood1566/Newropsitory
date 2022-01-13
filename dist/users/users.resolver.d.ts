import { CreateUserInput, FindUserInput, UpdateUSerInput } from './inputs/user.input';
import { UsersService } from './users.service';
export declare class UsersResolver {
    private userService;
    constructor(userService: UsersService);
    users(): Promise<import("./user.schema").Users[]>;
    activeUsers(): Promise<import("./user.schema").Users[]>;
    inActiveUsers(): Promise<import("./user.schema").Users[]>;
    blockedUsers(): Promise<import("./user.schema").Users[]>;
    unblockedUsers(): Promise<import("./user.schema").Users[]>;
    createUser(input: CreateUserInput): Promise<import("./user.schema").Users>;
    findUser(input: FindUserInput): Promise<import("./user.schema").Users>;
    updateUser(input: UpdateUSerInput): Promise<import("./user.schema").Users>;
    adminBlockUSer(input: UpdateUSerInput): Promise<import("./user.schema").Users>;
    sendAfterFiveEmail(): Promise<import("./user.schema").Users[]>;
}
