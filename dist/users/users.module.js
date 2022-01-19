"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_resolver_1 = require("./users.resolver");
const users_service_1 = require("./users.service");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./user.schema");
const subject_schema_1 = require("./subject.schema");
const marks_schema_1 = require("./marks.schema");
const donationProject_schema_1 = require("./donationProject.schema");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([
                { name: user_schema_1.Users.name, schema: user_schema_1.UserSchema },
                { name: subject_schema_1.Subjects.name, schema: subject_schema_1.SubjectSchema },
                { name: marks_schema_1.Marks.name, schema: marks_schema_1.MarksSchema },
                { name: donationProject_schema_1.porjectDonations.name, schema: donationProject_schema_1.porjectDonationsSchema }
            ])],
        providers: [users_resolver_1.UsersResolver, users_service_1.UsersService]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map