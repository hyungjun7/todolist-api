export class User {
  id: number
  account: string
  nickname: string
  description?: string
  profileImage?: string
  socialToken: string
  provider: AuthProvider
  status: boolean
  createdAt: Date
}

export enum AuthProvider {
  apple = 'apple',
  google = 'google',
  naver = 'naver'
}
