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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmail = exports.FindUserInput = exports.UpdateUSerInput = exports.CreateUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreateUserInput = class CreateUserInput {
};
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsAlpha)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsAlpha)(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], CreateUserInput.prototype, "DOB", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MinLength)(8, { each: true }),
    (0, graphql_1.Field)(),
    (0, class_validator_1.Matches)('(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])'),
    __metadata("design:type", String)
], CreateUserInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], CreateUserInput.prototype, "isBlock", void 0);
CreateUserInput = __decorate([
    (0, graphql_1.InputType)()
], CreateUserInput);
exports.CreateUserInput = CreateUserInput;
let UpdateUSerInput = class UpdateUSerInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateUSerInput.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUSerInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUSerInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], UpdateUSerInput.prototype, "DOB", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUSerInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUSerInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], UpdateUSerInput.prototype, "isBlock", void 0);
UpdateUSerInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateUSerInput);
exports.UpdateUSerInput = UpdateUSerInput;
let FindUserInput = class FindUserInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], FindUserInput.prototype, "_id", void 0);
FindUserInput = __decorate([
    (0, graphql_1.InputType)()
], FindUserInput);
exports.FindUserInput = FindUserInput;
let SendEmail = class SendEmail {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SendEmail.prototype, "email", void 0);
SendEmail = __decorate([
    (0, graphql_1.InputType)()
], SendEmail);
exports.SendEmail = SendEmail;
//# sourceMappingURL=user.input.js.map