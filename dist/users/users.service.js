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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./user.schema");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findall() {
        return this.userModel.find().exec();
    }
    async findActiveUsers() {
        return this.userModel.find({ status: "active" });
    }
    async findInActiveUsers() {
        return this.userModel.find({ status: "inactive" });
    }
    async findBlockedUsers() {
        return this.userModel.find({ isBlock: "true" });
    }
    async findUnblockedUsers() {
        return this.userModel.find({ isBlock: "false" });
    }
    async create(craeteUser) {
        const user = new this.userModel(craeteUser);
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: 'amina.damore57@ethereal.email',
                pass: 'eqUCSJqSR4w5FAapc3',
            },
        });
        let info = await transporter.sendMail({
            from: 'atif@gmail.com',
            to: user.email,
            subject: "Hello ✔",
            text: "Hello world?",
            html: "<b>Hello world?</b>",
        });
        console.log("email info is : ", info);
        const saltOrRounds = 10;
        const password = craeteUser.password;
        const hash = await bcrypt.hash(password, saltOrRounds);
        console.log("hash is : ", hash);
        var currentDate = new Date();
        console.log(currentDate);
        var years = currentDate.getFullYear();
        console.log("year is ", years);
        console.log("**********");
        var dob = craeteUser.DOB;
        console.log(dob);
        var year = dob.getFullYear();
        console.log("year is ", year);
        const age = years - year;
        console.log("age is : ", age);
        user.password = hash;
        user.Age = age;
        return user.save();
    }
    async findOne(user) {
        return this.userModel.findById(user._id);
    }
    async update(updateUser) {
        const user = await this.userModel.findOne(new mongoose_2.Types.ObjectId(updateUser._id));
        user.firstName = updateUser.firstName;
        user.lastName = updateUser.lastName;
        user.DOB = updateUser.DOB;
        user.email = updateUser.email;
        user.password = updateUser.password;
        user.isBlock = updateUser.isBlock;
        return user.save();
    }
    async adminBlock(updateIsBlock) {
        const user = await this.userModel.findById(updateIsBlock._id);
        user.isBlock = updateIsBlock.isBlock;
        return user.save();
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.Users.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map