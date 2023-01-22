import { FindUserResult } from '../@types/user.result'

export interface FindUserUseCase {
  findUser(id: number): Promise<FindUserResult>
}
