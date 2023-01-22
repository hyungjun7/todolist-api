import { User } from '../../domain/user'

export interface IUserRepository {
  create(user: User): Promise<User>

  findOne(id: number): Promise<User>

  update(user: User): Promise<void>
}
