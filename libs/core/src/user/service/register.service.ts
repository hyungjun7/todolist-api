import { IOAuthProvider } from '@app/core/auth/port/out/oauth.provider'
import { Inject, Injectable } from '@nestjs/common'
import { User } from '../domain/user'
import { CreateUserInput } from '../port/@types/user.input'
import { FindUserResult } from '../port/@types/user.result'
import { CreateUserUseCase } from '../port/in/create.user.usecase'
import { IUserRepository } from '../port/out/user.repository'

@Injectable()
export class RegisterService implements CreateUserUseCase {
  constructor(
    @Inject('UserRepository') private userRepository: IUserRepository,
    @Inject('OAuthProvider') private oauthProvider: IOAuthProvider
  ) {}

  async register(data: CreateUserInput): Promise<FindUserResult> {
    const { socialToken, provider } = data
    const account = await this.oauthProvider.findAccountByToken(provider, socialToken)
    const user = new User({ ...data, socialToken: account.id })
    return this.userRepository.create(user)
  }
}
