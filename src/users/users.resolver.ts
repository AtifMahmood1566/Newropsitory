import { Args, Mutation, Query ,Resolver } from '@nestjs/graphql';
import { UserDto } from './dto/user.dto';
import { CreateUserInput, FindUserInput, UpdateUSerInput } from './inputs/user.input';
import { UsersService } from './users.service';

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
}
