import { ConsoleLogger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateMarksInput, createProjectInput, CreateSubjectInput, CreateUserInput, findProjectForDonation, FindUserForPercentage, FindUserInput, UpdateUSerInput } from './inputs/user.input';
import { Users, UserSchema } from './user.schema';
import { Subjects } from './subject.schema';
import * as bcrypt from 'bcrypt';
import * as nodemailer from 'nodemailer';
import { ObjectId } from 'mongodb';
import { Cron } from '@nestjs/schedule';
import { Marks } from './marks.schema';
import { PositionDto } from './dto/position.dto';
import { porjectDonations } from './donationProject.schema';


@Injectable()
export class UsersService {
    
    constructor(@InjectModel(Users.name) private userModel :Model<Users> ,
                @InjectModel(Subjects.name) private subjectModel : Model<Subjects>,
                @InjectModel(Marks.name) private marksModel : Model<Marks>,
                @InjectModel(porjectDonations.name) private projectDonationModel : Model<porjectDonations>
                ){}

   

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

    async addSubjects(createSubject : CreateSubjectInput) : Promise<Subjects>
    {
        const subject = new this.subjectModel(createSubject);
        return subject.save();
    }

    async addMarksInfo(createMarks : CreateMarksInput) : Promise<Marks>
    {
        try
        {
            console.log("createMarks is : ", createMarks)
            const marks = new this.marksModel(createMarks);
            console.log("value of userId is : " , marks.userID)
            console.log("value of subjectId is : ", marks.subjectID)
            console.log("value of marks is : ",marks.marks)
            return marks.save();
        }
        catch(error)
        {
            console.log("some error : " , error)
        }
        
    }

    async findUserPercentage(finduser : FindUserForPercentage) 
    {
        const user = await this.marksModel.find(finduser);
        console.log("user id is : " , finduser);
        console.log("user is  : " , user)
        var sum = 0;
    
        for (let i = 0 ; i<user.length ; i++)
        {
            var marks = user[i].marks;
            console.log("marks are : " , marks);
            sum = sum + marks
        }
        console.log("sum is : " , sum)
        var percentage = (sum / 250) * 100;
        console.log("percentage is : " , percentage);

        return percentage;
    }

    async findPositions() 
    {
        let sum = 0 ;
        let array = [];
        const users = await this.userModel.find();
        for(let i = 0 ; i<users.length ; i++)
        {
            console.log("ids are " , users[i]._id)

            const userTotal = await this.marksModel.find({userID : users[i]._id}) 
            console.log("subject records are : " , userTotal.length)
            for(let i = 0 ; i<userTotal.length ; i++)
            {
                sum = sum + userTotal[i].marks;
            }

            let sumAfter = sum;
            console.log("sumafter is  : " , sumAfter)
            sum = 0;
            array.push({"userID" : users[i]._id , "marks" : sumAfter })
            
            console.log("sum of marks are : " , sum)
        }

        array.sort((a, b) => {
            return b.marks - a.marks;
        });
        
        
        var finalarrayLenght = array.length;
        console.log("final array length is : " , finalarrayLenght)
        for(let i =0 ; i<array.length ; i++)
        {
            console.log("value of i is : ", i)
            console.log("Final array is : " , array[i])
        }
        
        
        return array;
        
    }

    async findClassTopper()
    {
        
        let sum = 0 ;
        let array = [];
        const users = await this.userModel.find();
        for(let i = 0 ; i<users.length ; i++)
        {
            console.log("ids are " , users[i]._id)

            const userTotal = await this.marksModel.find({userID : users[i]._id}) 
            console.log("subject records are : " , userTotal.length)
            for(let i = 0 ; i<userTotal.length ; i++)
            {
                sum = sum + userTotal[i].marks;
            }

            let sumAfter = sum;
            console.log("sumafter is  : " , sumAfter)
            sum = 0;
            array.push({"userid" : users[i]._id , "MarksTotal" : sumAfter })
            
            console.log("sum of marks are : " , sum)
        }

        array.sort((a, b) => {
            return b.MarksTotal - a.MarksTotal;
        });
        
        
        var finalarrayLenght = array.length;
        console.log("final array length is : " , finalarrayLenght)
        for(let i =0 ; i<array.length ; i++)
        {
            console.log("value of i is : ", i)
            console.log("Final array is : " , array[i])
        }
        
       var maximum = Math.max.apply(Math, array.map(function(o) { return o.MarksTotal; }))
       console.log('map array lenght is : ' , maximum)

       var filterObj = array.filter(function(e) {
        return e.MarksTotal == maximum;
      });

      console.log("Class topper is : " , filterObj)

       
    return filterObj; 
    }

    async createProject( createprojectInput : createProjectInput) : Promise<porjectDonations>
    {
        const project = await new this.projectDonationModel(createprojectInput);
        const ending_date = project.endingDate;
        const updatedDate = new Date(ending_date);

        project.endingDate = updatedDate;
        return project.save(); 
    }

    async findProjectsDonations(findProjectInput : findProjectForDonation)
    {
        const project = await this.projectDonationModel.findById(findProjectInput._id)
        return project;
    }

    //@Cron('*/1 * * * *')
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
