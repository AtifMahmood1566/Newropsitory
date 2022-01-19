import { Model } from 'mongoose';
import { CreateMarksInput, createProjectInput, CreateSubjectInput, CreateUserInput, findProjectForDonation, FindUserForPercentage, FindUserInput, UpdateUSerInput } from './inputs/user.input';
import { Users } from './user.schema';
import { Subjects } from './subject.schema';
import { Marks } from './marks.schema';
import { porjectDonations } from './donationProject.schema';
export declare class UsersService {
    private userModel;
    private subjectModel;
    private marksModel;
    private projectDonationModel;
    constructor(userModel: Model<Users>, subjectModel: Model<Subjects>, marksModel: Model<Marks>, projectDonationModel: Model<porjectDonations>);
    findall(): Promise<Users[]>;
    findActiveUsers(): Promise<Users[]>;
    findInActiveUsers(): Promise<Users[]>;
    findBlockedUsers(): Promise<Users[]>;
    findUnblockedUsers(): Promise<Users[]>;
    create(craeteUser: CreateUserInput): Promise<Users>;
    findOne(user: FindUserInput): Promise<Users>;
    update(updateUser: UpdateUSerInput): Promise<Users>;
    adminBlock(updateIsBlock: UpdateUSerInput): Promise<Users>;
    addSubjects(createSubject: CreateSubjectInput): Promise<Subjects>;
    addMarksInfo(createMarks: CreateMarksInput): Promise<Marks>;
    findUserPercentage(finduser: FindUserForPercentage): Promise<number>;
    findPositions(): Promise<any[]>;
    findClassTopper(): Promise<any[]>;
    createProject(createprojectInput: createProjectInput): Promise<porjectDonations>;
    findProjectsDonations(findProjectInput: findProjectForDonation): Promise<porjectDonations & {
        _id: any;
    }>;
    afterFiveEmail(): Promise<Users[]>;
}
