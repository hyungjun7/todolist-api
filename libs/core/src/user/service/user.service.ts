import { NotFoundException } from '@app/core/common/exceptions'
import { Inject, Injectable } from '@nestjs/common'
import { FindUserResult } from '../port/@types/user.result'
import { FindUserUseCase } from '../port/in/find.user.usecase'
import { IUserRepository } from '../port/out/user.repository'

@Injectable()
export class UserService implements FindUserUseCase {
  constructor(
    @Inject('UserRepository') private userRepository: IUserRepository
  ) {}

  async findUser(id: number): Promise<FindUserResult> {
    const user = await this.userRepository.findOne(id)
    if (!user) throw new NotFoundException('user_not_found')
    return { ...user }
  }
}
