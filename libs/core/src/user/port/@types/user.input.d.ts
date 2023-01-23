import { AuthProvider } from '../../domain/user'

export interface CreateUserInput {
  account: string
  nickname: string
  description?: string
  profileImage?: string
  provider: AuthProvider
  socialToken: string
}
