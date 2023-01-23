import { CreateUserInput } from '../@types/user.input'
import { FindUserResult } from '../@types/user.result'

export interface CreateUserUseCase {
  register(data: CreateUserInput): Promise<FindUserResult>
}
