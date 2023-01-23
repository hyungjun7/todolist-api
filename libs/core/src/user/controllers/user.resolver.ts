import { Inject } from '@nestjs/common'
import { Args, Int, Query, Resolver } from '@nestjs/graphql'
import { FindUserUseCase } from '../port/in/find.user.usecase'
import { User } from './dto/user.graphql.schema'

@Resolver(() => User)
export class UserResolver {
  constructor(
    @Inject('UserService') private findUserUseCase: FindUserUseCase
  ) {}

  @Query(() => User, { name: 'QueryUser' })
  user(@Args('userId', { type: () => Int }) userId: number) {
    return this.findUserUseCase.findUser(userId)
  }
}
