import { DatabaseService } from '@app/database'
import { Injectable } from '@nestjs/common'
import { User } from '../domain/user'
import { IUserRepository } from '../port/out/user.repository'

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private prisma: DatabaseService) {}
  async create(user: User): Promise<User> {
    const result = await this.prisma.user.create({
      data: {
        ...user
      }
    })
    return result as User
  }

  async findOne(id: number): Promise<User> {
    const result = await this.prisma.user.findFirst({
      where: {
        id
      }
    })
    return result as User
  }

  async update(user: User): Promise<void> {
    this.prisma.user.update({
      data: {
        ...user
      },
      where: {
        id: user.id
      }
    })
  }
}
