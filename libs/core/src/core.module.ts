import { DatabaseModule } from '@app/database'
import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
      formatError: (e) => {
        e.extensions = process.env.NODE_ENV === 'production' && null
        return e
      }
    }),
    DatabaseModule,
    UserModule,
    AuthModule
  ],
  providers: [],
  exports: []
})
export class CoreModule {}
