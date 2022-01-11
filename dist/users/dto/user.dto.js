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
exports.UserDto = void 0;
const graphql_1 = require("@nestjs/graphql");
let UserDto = class UserDto {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserDto.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserDto.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], UserDto.prototype, "DOB", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], UserDto.prototype, "Age", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserDto.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], UserDto.prototype, "isBlock", void 0);
UserDto = __decorate([
    (0, graphql_1.ObjectType)()
], UserDto);
exports.UserDto = UserDto;
//# sourceMappingURL=user.dto.js.map