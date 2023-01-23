import { DatabaseModule } from '@app/database'
import { Module } from '@nestjs/common'
import { AuthModule } from '../auth/auth.module'
import { UserResolver } from './controllers/user.resolver'
import { UserRepository } from './repository/user.repository'
import { RegisterService } from './service/register.service'
import { UserService } from './service/user.service'

@Module({
  imports: [DatabaseModule, AuthModule],
  providers: [
    UserResolver,
    {
      provide: 'UserService',
      useClass: UserService
    },
    {
      provide: 'UserRepository',
      useClass: UserRepository
    },
    {
      provide: 'RegisterService',
      useClass: RegisterService
    }
  ]
})
export class UserModule {}
