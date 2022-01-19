import { Args, Mutation, Query ,Resolver } from '@nestjs/graphql';
import { SubjectDto } from './dto/subject.dto';
import { MarksDto } from './dto/marks.dto'
import { UserDto } from './dto/user.dto';
import { CreateMarksInput, createProjectInput, CreateSubjectInput, CreateUserInput, findProjectForDonation, FindUserForPercentage, FindUserInput, updateInputForProjectDonation, UpdateUSerInput } from './inputs/user.input';
import { UsersService } from './users.service';
import { PercentageDto } from './dto/percnetage.dto';
import { PositionDto } from './dto/position.dto';
import { projectDonationDto } from './dto/projectDonation.dto';


@Resolver()
export class UsersResolver {
    constructor(
        private userService : UsersService,
    ){}

    @Query(() => [UserDto])
    async users()
    {
        return this.userService.findall();
    }

    @Query(() => [UserDto])
    async activeUsers()
    {
        return this.userService.findActiveUsers();
    }

    @Query(() => [UserDto])
    async inActiveUsers()
    {
        return this.userService.findInActiveUsers();
    }

    @Query(() => [UserDto])
    async blockedUsers()
    {
        return this.userService.findBlockedUsers();
    }

    @Query(() => [UserDto])
    async unblockedUsers()
    {
        return this.userService.findUnblockedUsers();
    }

    @Mutation(() => UserDto)
    async createUser(@Args('input') input : CreateUserInput)
    {
        return this.userService.create(input);
    }

    @Query(() => UserDto)
    async findUser(@Args('input') input : FindUserInput)
    {
        return this.userService.findOne(input)
    }

    @Mutation(() => UserDto)
    async updateUser (@Args('input') input : UpdateUSerInput)
    {
        return this.userService.update(input);
    }

    @Mutation(() => UserDto)
    async adminBlockUSer(@Args('input') input : UpdateUSerInput)
    {
        return this.userService.adminBlock(input);
    }

    @Mutation(() => SubjectDto)
    async addSubject(@Args('input') input : CreateSubjectInput)
    {
        return this.userService.addSubjects(input);
    }

    @Mutation(() => MarksDto)
    async addMarks(@Args('input') input : CreateMarksInput)
    {
        return this.userService.addMarksInfo(input);
    }

    @Mutation(() => PercentageDto) 
    async findPercentage(@Args('input') input : FindUserForPercentage)
    {
        
        var percentageDto = new PercentageDto()

        percentageDto.percentage = await this.userService.findUserPercentage(input);

        return percentageDto;
        //return this.userService.findUserPercentage(input);
    }

    @Mutation(() => [PositionDto])
    async findPosition()    
    {
        // var positionDto = new PositionDto()
        // let positions = await this.userService.findPositions();
        // //positionDto = await this.userService.findPositions();
        // for(let i = 0 ; i<positions.length ; i++)
        // {
        //     positionDto.userID = positions[i].userid;
        
        //     positionDto.marks = positions[i].marks;
        // }
      
        // // console.log("positionDto is : " , positionDto)
        // return positionDto;
        return this.userService.findPositions();
    }

    @Mutation(() => PositionDto)
    async findToppers()
    {
        var positionDto = new PositionDto()
        let positions = await this.userService.findClassTopper();
        //positionDto = await this.userService.findPositions();
        positionDto.userID = positions[0].userid;
        
        positionDto.marks = positions[0].MarksTotal;
        // console.log("positionDto is : " , positionDto)
        return positionDto;
        //return this.userService.findClassTopper();
    }
    
    @Mutation(() => projectDonationDto)
    async addProject(@Args('input') createprojectInput : createProjectInput)
    {
        return await this.userService.createProject(createprojectInput);
    }

    @Query(() => projectDonationDto)
    async findProjectDonations(@Args('input') findProjectInput : findProjectForDonation)
    {
        return await this.userService.findProjectsDonations(findProjectInput);
    }

    @Mutation(() => projectDonationDto)
    async findProjectForDonation(@Args('input') projectDonationInput : updateInputForProjectDonation)
    {
        return await this.userService.updateProjectDonations(projectDonationInput);
    }

}