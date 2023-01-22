import { DatabaseModule } from '@app/database'
import { Module } from '@nestjs/common'
import { UserResolver } from './controllers/user.resolver'
import { UserRepository } from './repository/user.repository'
import { UserService } from './service/user.service'

@Module({
  imports: [DatabaseModule],
  providers: [
    UserResolver,
    {
      provide: 'UserService',
      useClass: UserService
    },
    {
      provide: 'UserRepository',
      useClass: UserRepository
    }
  ]
})
export class UserModule {}
