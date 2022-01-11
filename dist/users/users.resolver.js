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
const user_dto_1 = require("./dto/user.dto");
const user_input_1 = require("./inputs/user.input");
const users_service_1 = require("./users.service");
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
UsersResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersResolver);
exports.UsersResolver = UsersResolver;
//# sourceMappingURL=users.resolver.js.map