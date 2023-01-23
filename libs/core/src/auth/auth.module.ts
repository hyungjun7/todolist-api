import { Module } from '@nestjs/common'
import { OAuthProvider } from './adapter/oauth.provider'

const providers = [
  {
    provide: 'OAuthProvider',
    useClass: OAuthProvider
  }
]

@Module({
  imports: [],
  providers,
  exports: providers
})
export class AuthModule {}
