import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateUserInput, FindUserInput, UpdateUSerInput } from './inputs/user.input';
import { Users } from './user.schema';
import * as bcrypt from 'bcrypt';
import * as nodemailer from 'nodemailer';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) private userModel :Model<Users>){}

    async findall() : Promise<Users[]>
    {
        
        return this.userModel.find().exec();
    }

    async findActiveUsers() : Promise<Users[]>
    {
        return this.userModel.find({status : "active"})
    }

    async findInActiveUsers() : Promise<Users[]>
    {
        return this.userModel.find({status : "inactive"})
    }

    async findBlockedUsers() : Promise<Users[]>
    {
        return this.userModel.find({isBlock : "true"})
    }

    async findUnblockedUsers() : Promise<Users[]>
    {
        return this.userModel.find({isBlock : "false"})
    }

    async create( craeteUser : CreateUserInput) : Promise<Users>
    {
        const user = new this.userModel(craeteUser);

        //email
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        // let testAccount = await nodemailer.createTestAccount();

        //create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
            user: 'insightsquare59@gmail.com', // generated ethereal user
            pass: 'insight@123', // generated ethereal password
            },
        });

         // send mail with defined transport object
        let info = await transporter.sendMail({
            from: 'atif@gmail.com', // sender address
            to: user.email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello Tauqeer bhai", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        console.log("email  info is : ", info)
        

        const saltOrRounds = 10;
        const password = craeteUser.password;
        const hash = await bcrypt.hash(password, saltOrRounds);
        console.log("hash is : ", hash)

        var currentDate = new Date();
        console.log(currentDate) 
        var years = currentDate.getFullYear()
        console.log("year is ", years)

        console.log("**********")

        
        var dob = craeteUser.DOB;
        console.log(dob)
         
        

        var year = dob.getFullYear()
        console.log("year is ", year)

        const age = years - year;
        console.log("age is : " , age )

        user.password = hash;
        user.Age = age;
        return user.save();
    }

    async findOne(user : FindUserInput) : Promise<Users>
    {
        return this.userModel.findById(user._id);
    }

  

    async update(updateUser : UpdateUSerInput) : Promise<Users>
    {
        const user = await this.userModel.findOne(new Types.ObjectId(updateUser._id));
        user.firstName = updateUser.firstName;
        user.lastName = updateUser.lastName;
        user.DOB = updateUser.DOB;
        user.email = updateUser.email;
        user.password = updateUser.password;
        user.isBlock = updateUser.isBlock;
        
        return user.save();
    }

    async adminBlock(updateIsBlock : UpdateUSerInput) : Promise<Users>
    {
        const user = await this.userModel.findById(updateIsBlock._id);
        user.isBlock = updateIsBlock.isBlock
        return user.save();
    }
}
