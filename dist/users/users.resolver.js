"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const subject_dto_1 = require("./dto/subject.dto");
const marks_dto_1 = require("./dto/marks.dto");
const user_dto_1 = require("./dto/user.dto");
const user_input_1 = require("./inputs/user.input");
const users_service_1 = require("./users.service");
const percnetage_dto_1 = require("./dto/percnetage.dto");
const position_dto_1 = require("./dto/position.dto");
const projectDonation_dto_1 = require("./dto/projectDonation.dto");
let UsersResolver = class UsersResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async users() {
        return this.userService.findall();
    }
    async activeUsers() {
        return this.userService.findActiveUsers();
    }
    async inActiveUsers() {
        return this.userService.findInActiveUsers();
    }
    async blockedUsers() {
        return this.userService.findBlockedUsers();
    }
    async unblockedUsers() {
        return this.userService.findUnblockedUsers();
    }
    async createUser(input) {
        return this.userService.create(input);
    }
    async findUser(input) {
        return this.userService.findOne(input);
    }
    async updateUser(input) {
        return this.userService.update(input);
    }
    async adminBlockUSer(input) {
        return this.userService.adminBlock(input);
    }
    async addSubject(input) {
        return this.userService.addSubjects(input);
    }
    async addMarks(input) {
        return this.userService.addMarksInfo(input);
    }
    async findPercentage(input) {
        var percentageDto = new percnetage_dto_1.PercentageDto();
        percentageDto.percentage = await this.userService.findUserPercentage(input);
        return percentageDto;
    }
    async findPosition() {
        return this.userService.findPositions();
    }
    async findToppers() {
        var positionDto = new position_dto_1.PositionDto();
        let positions = await this.userService.findClassTopper();
        positionDto.userID = positions[0].userid;
        positionDto.marks = positions[0].MarksTotal;
        return positionDto;
    }
    async addProject(createprojectInput) {
        return await this.userService.createProject(createprojectInput);
    }
    async findProjectDonations(findProjectInput) {
        return await this.userService.findProjectsDonations(findProjectInput);
    }
    async findProjectForDonation(projectDonationInput) {
        return await this.userService.updateProjectDonations(projectDonationInput);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [user_dto_1.UserDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "users", null);
__decorate([
    (0, graphql_1.Query)(() => [user_dto_1.UserDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "activeUsers", null);
__decorate([
    (0, graphql_1.Query)(() => [user_dto_1.UserDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "inActiveUsers", null);
__decorate([
    (0, graphql_1.Query)(() => [user_dto_1.UserDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "blockedUsers", null);
__decorate([
    (0, graphql_1.Query)(() => [user_dto_1.UserDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "unblockedUsers", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_dto_1.UserDto),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.CreateUserInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "createUser", null);
__decorate([
    (0, graphql_1.Query)(() => user_dto_1.UserDto),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.FindUserInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "findUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_dto_1.UserDto),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.UpdateUSerInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "updateUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_dto_1.UserDto),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.UpdateUSerInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "adminBlockUSer", null);
__decorate([
    (0, graphql_1.Mutation)(() => subject_dto_1.SubjectDto),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.CreateSubjectInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "addSubject", null);
__decorate([
    (0, graphql_1.Mutation)(() => marks_dto_1.MarksDto),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.CreateMarksInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "addMarks", null);
__decorate([
    (0, graphql_1.Mutation)(() => percnetage_dto_1.PercentageDto),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.FindUserForPercentage]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "findPercentage", null);
__decorate([
    (0, graphql_1.Mutation)(() => [position_dto_1.PositionDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "findPosition", null);
__decorate([
    (0, graphql_1.Mutation)(() => position_dto_1.PositionDto),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "findToppers", null);
__decorate([
    (0, graphql_1.Mutation)(() => projectDonation_dto_1.projectDonationDto),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.createProjectInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "addProject", null);
__decorate([
    (0, graphql_1.Query)(() => projectDonation_dto_1.projectDonationDto),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.findProjectForDonation]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "findProjectDonations", null);
__decorate([
    (0, graphql_1.Mutation)(() => projectDonation_dto_1.projectDonationDto),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.updateInputForProjectDonation]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "findProjectForDonation", null);
UsersResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersResolver);
exports.UsersResolver = UsersResolver;
//# sourceMappingURL=users.resolver.js.map