import { CreateMarksInput, createProjectInput, CreateSubjectInput, CreateUserInput, findProjectForDonation, FindUserForPercentage, FindUserInput, UpdateUSerInput } from './inputs/user.input';
import { UsersService } from './users.service';
import { PercentageDto } from './dto/percnetage.dto';
import { PositionDto } from './dto/position.dto';
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
    addSubject(input: CreateSubjectInput): Promise<import("./subject.schema").Subjects>;
    addMarks(input: CreateMarksInput): Promise<import("./marks.schema").Marks>;
    findPercentage(input: FindUserForPercentage): Promise<PercentageDto>;
    findPosition(): Promise<any[]>;
    findToppers(): Promise<PositionDto>;
    addProject(createprojectInput: createProjectInput): Promise<import("./donationProject.schema").porjectDonations>;
    findProjectDonations(findProjectInput: findProjectForDonation): Promise<import("./donationProject.schema").porjectDonations & {
        _id: any;
    }>;
}
