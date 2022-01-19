"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_schema_1 = require("./users/user.schema");
const users_module_1 = require("./users/users.module");
const schedule_1 = require("@nestjs/schedule");
const marks_schema_1 = require("./users/marks.schema");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: 'schema.gql',
                playground: true,
                introspection: true,
            }),
            schedule_1.ScheduleModule.forRoot(),
            mongoose_1.MongooseModule.forRoot('mongodb+srv://atif:dbUserPassword@cluster0.x15aw.mongodb.net/ngm?retryWrites=true&w=majority'),
            mongoose_1.MongooseModule.forFeature([{
                    name: user_schema_1.Users.name, schema: user_schema_1.UserSchema
                }]),
            mongoose_1.MongooseModule.forFeature([{
                    name: marks_schema_1.Marks.name, schema: marks_schema_1.MarksSchema
                }])
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map