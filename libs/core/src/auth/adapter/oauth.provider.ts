import { AuthProvider } from '@app/core/user/domain/user'
import { Injectable } from '@nestjs/common'
import { SocialAccountResult } from '../port/@types/auth.result'
import { IOAuthProvider } from '../port/out/oauth.provider'

@Injectable()
export class OAuthProvider implements IOAuthProvider {
  async findAccountByToken(provider: AuthProvider, socialToken: string): Promise<SocialAccountResult> {
    return {
      id: 'asdsdfsdfsd'
    }
  }
}
