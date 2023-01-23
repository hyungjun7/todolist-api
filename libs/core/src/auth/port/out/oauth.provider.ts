import { AuthProvider } from '@app/core/user/domain/user'
import { SocialAccountResult } from '../@types/auth.result'

export interface IOAuthProvider {
  findAccountByToken(provider: AuthProvider, socialToken: string): Promise<SocialAccountResult>
}
