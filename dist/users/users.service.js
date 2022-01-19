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
const subject_schema_1 = require("./subject.schema");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const mongodb_1 = require("mongodb");
const marks_schema_1 = require("./marks.schema");
const donationProject_schema_1 = require("./donationProject.schema");
let UsersService = class UsersService {
    constructor(userModel, subjectModel, marksModel, projectDonationModel) {
        this.userModel = userModel;
        this.subjectModel = subjectModel;
        this.marksModel = marksModel;
        this.projectDonationModel = projectDonationModel;
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
        const completeUser = user.save();
        return completeUser;
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
    async addSubjects(createSubject) {
        const subject = new this.subjectModel(createSubject);
        return subject.save();
    }
    async addMarksInfo(createMarks) {
        try {
            console.log("createMarks is : ", createMarks);
            const marks = new this.marksModel(createMarks);
            console.log("value of userId is : ", marks.userID);
            console.log("value of subjectId is : ", marks.subjectID);
            console.log("value of marks is : ", marks.marks);
            return marks.save();
        }
        catch (error) {
            console.log("some error : ", error);
        }
    }
    async findUserPercentage(finduser) {
        const user = await this.marksModel.find(finduser);
        console.log("user id is : ", finduser);
        console.log("user is  : ", user);
        var sum = 0;
        for (let i = 0; i < user.length; i++) {
            var marks = user[i].marks;
            console.log("marks are : ", marks);
            sum = sum + marks;
        }
        console.log("sum is : ", sum);
        var percentage = (sum / 250) * 100;
        console.log("percentage is : ", percentage);
        return percentage;
    }
    async findPositions() {
        let sum = 0;
        let array = [];
        const users = await this.userModel.find();
        for (let i = 0; i < users.length; i++) {
            console.log("ids are ", users[i]._id);
            const userTotal = await this.marksModel.find({ userID: users[i]._id });
            console.log("subject records are : ", userTotal.length);
            for (let i = 0; i < userTotal.length; i++) {
                sum = sum + userTotal[i].marks;
            }
            let sumAfter = sum;
            console.log("sumafter is  : ", sumAfter);
            sum = 0;
            array.push({ "userID": users[i]._id, "marks": sumAfter });
            console.log("sum of marks are : ", sum);
        }
        array.sort((a, b) => {
            return b.marks - a.marks;
        });
        var finalarrayLenght = array.length;
        console.log("final array length is : ", finalarrayLenght);
        for (let i = 0; i < array.length; i++) {
            console.log("value of i is : ", i);
            console.log("Final array is : ", array[i]);
        }
        return array;
    }
    async findClassTopper() {
        let sum = 0;
        let array = [];
        const users = await this.userModel.find();
        for (let i = 0; i < users.length; i++) {
            console.log("ids are ", users[i]._id);
            const userTotal = await this.marksModel.find({ userID: users[i]._id });
            console.log("subject records are : ", userTotal.length);
            for (let i = 0; i < userTotal.length; i++) {
                sum = sum + userTotal[i].marks;
            }
            let sumAfter = sum;
            console.log("sumafter is  : ", sumAfter);
            sum = 0;
            array.push({ "userid": users[i]._id, "MarksTotal": sumAfter });
            console.log("sum of marks are : ", sum);
        }
        array.sort((a, b) => {
            return b.MarksTotal - a.MarksTotal;
        });
        var finalarrayLenght = array.length;
        console.log("final array length is : ", finalarrayLenght);
        for (let i = 0; i < array.length; i++) {
            console.log("value of i is : ", i);
            console.log("Final array is : ", array[i]);
        }
        var maximum = Math.max.apply(Math, array.map(function (o) { return o.MarksTotal; }));
        console.log('map array lenght is : ', maximum);
        var filterObj = array.filter(function (e) {
            return e.MarksTotal == maximum;
        });
        console.log("Class topper is : ", filterObj);
        return filterObj;
    }
    async createProject(createprojectInput) {
        const project = await new this.projectDonationModel(createprojectInput);
        const ending_date = project.endingDate;
        const updatedDate = new Date(ending_date);
        project.endingDate = updatedDate;
        return project.save();
    }
    async findProjectsDonations(findProjectInput) {
        const project = await this.projectDonationModel.findById(findProjectInput._id);
        return project;
    }
    async afterFiveEmail() {
        console.log("running after 1 minute");
        const users = await this.userModel.find({ status: "inactive" });
        const length = users.length;
        const currentdate = new Date();
        const afterFiveCurrentDate = new Date();
        const setTime = afterFiveCurrentDate.setMinutes(afterFiveCurrentDate.getMinutes() + 5);
        const updatedTime = new Date(setTime);
        console.log("current date is : ", currentdate);
        console.log('time after addition is : ', updatedTime);
        const currentTime = currentdate.getMinutes();
        console.log("current time is : ", currentTime);
        console.log("length of users array is :  ", length);
        for (let i = 0; i < length; i++) {
            const insertionTime = new mongodb_1.ObjectId(users[i]._id).getTimestamp();
            const insertionMinutes = insertionTime.getMinutes();
            const afterFive = insertionMinutes + 5;
            if (afterFive === currentTime && users[i].status === "inactive") {
                let transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false,
                    auth: {
                        user: 'insightsquare59@gmail.com',
                        pass: 'insight@123',
                    },
                });
                let info = await transporter.sendMail({
                    from: 'atif@gmail.com',
                    to: users[i].email,
                    subject: "Hello ✔",
                    text: "Hello Tauqeer bhai",
                    html: "<b>Dear User your time for activation is exceeded it,s assigned limit. Please do registration again</b>",
                });
                console.log("email  info is : ", info);
            }
        }
        return users;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.Users.name)),
    __param(1, (0, mongoose_1.InjectModel)(subject_schema_1.Subjects.name)),
    __param(2, (0, mongoose_1.InjectModel)(marks_schema_1.Marks.name)),
    __param(3, (0, mongoose_1.InjectModel)(donationProject_schema_1.porjectDonations.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map