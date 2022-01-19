import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PositionDto } from './users/dto/position.dto';
import { Marks } from './users/marks.schema';
import { Users } from './users/user.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Users.name) private userModel :Model<Users>,
    @InjectModel(Marks.name) private marksModel : Model<Marks>
  ){}
  getHello(): string {
    return 'Hello World!';
  }

  // async findPositions() : Promise<[PositionDto]>
  // {
  //   let sum = 0 ;
  //       let array = [];
  //       const users = await this.userModel.find();
  //       for(let i = 0 ; i<users.length ; i++)
  //       {
  //           console.log("ids are " , users[i]._id)

  //           const userTotal = await this.marksModel.find({userID : users[i]._id}) 
  //           console.log("subject records are : " , userTotal.length)
  //           for(let i = 0 ; i<userTotal.length ; i++)
  //           {
  //               sum = sum + userTotal[i].marks;
  //           }

  //           let sumAfter = sum;
  //           console.log("sumafter is  : " , sumAfter)
  //           sum = 0;
  //           array.push({"userid" : users[i]._id , "MarksTotal" : sumAfter })
            
  //           console.log("sum of marks are : " , sum)
  //       }

  //       array.sort((a, b) => {
  //           return b.MarksTotal - a.MarksTotal;
  //       });
        
        
  //       var finalarrayLenght = array.length;
  //       console.log("final array length is : " , finalarrayLenght)
  //       for(let i =0 ; i<array.length ; i++)
  //       {
  //           console.log("value of i is : ", i)
  //           console.log("Final array is : " , array[i])
  //       }

  //       var usersArray = array.map(o => o.userid) as [string];
  //       var marksArray = array.map(o => o.MarksTotal )

  //       var positionDto = new PositionDto();
  //       positionDto.userID = usersArray ;
  //       positionDto.marks = marksArray as PositionDto['marks'];
  //        return [positionDto];
  // }
}
