import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateUserInput, FindUserInput, UpdateUSerInput } from './inputs/user.input';
import { Users } from './user.schema';
import * as bcrypt from 'bcrypt';
import * as nodemailer from 'nodemailer';
import { ObjectId } from 'mongodb';
import { Cron } from '@nestjs/schedule';

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

        const completeUser = user.save();
        return completeUser;
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

    @Cron('*/1 * * * * ')
    async afterFiveEmail() : Promise<Users[]>
    {
        console.log("running after 1 minute")
        const users = await this.userModel.find({status : "inactive"});
        const length = users.length;
        const currentdate = new Date();
        const afterFiveCurrentDate = new Date();
        const setTime = afterFiveCurrentDate.setMinutes(afterFiveCurrentDate.getMinutes() + 5)
       
        const updatedTime = new Date(setTime);
        console.log("current date is : " , currentdate )
        console.log('time after addition is : ', updatedTime)
        // const seconddate = new Date();
        const currentTime = currentdate.getMinutes();
        
        console.log("current time is : ",currentTime)
        console.log("length of users array is :  ", length);
        for(let i = 0 ; i<length ; i++)
        { 
            // console.log(users[i]._id)
            const insertionTime = new ObjectId(users[i]._id).getTimestamp()
            const insertionMinutes = insertionTime.getMinutes();
            const afterFive = insertionMinutes + 5;
            
            // console.log("insertion minutes are : ",insertionMinutes)
            // console.log("insertion time after five minutes is : " , afterFive)
            if(afterFive === currentTime && users[i].status === "inactive")
            {
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
                    to: users[i].email, // list of receivers
                    subject: "Hello ✔", // Subject line
                    text: "Hello Tauqeer bhai", // plain text body
                    html: "<b>Dear User your time for activation is exceeded it,s assigned limit. Please do registration again</b>", // html body
                });
        
                console.log("email  info is : ", info)
            }
            // console.log("insertion time is : ",insertionTime )
        }
        // function getDifferenceInDays(currentdate, seconddate) {
        //     const diffInMs = Math.abs(seconddate - currentdate);
        //     return diffInMs / (1000 * 60 * 60 * 24);
        //   }
        //   console.log("differnce is : ",getDifferenceInDays(currentdate, seconddate))
        
        return users;
    }
}
