import { Inject } from '@nestjs/common'
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateUserUseCase } from '../port/in/create.user.usecase'
import { FindUserUseCase } from '../port/in/find.user.usecase'
import { CreateUserInput, User } from './dto/user.graphql.schema'

@Resolver(() => User)
export class UserResolver {
  constructor(
    @Inject('UserService') private findUserUseCase: FindUserUseCase,
    @Inject('RegisterService') private createUserUseCase: CreateUserUseCase
  ) {}

  @Mutation(() => User, { name: 'MutationUser' })
  register(@Args('CreateUserData') createUserData: CreateUserInput) {
    return this.createUserUseCase.register(createUserData)
  }

  @Query(() => User, { name: 'QueryUser' })
  user(@Args('userId', { type: () => Int }) userId: number) {
    return this.findUserUseCase.findUser(userId)
  }
}
