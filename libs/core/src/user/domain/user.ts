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

  constructor(data: Partial<User>) {
    Object.assign(this, data)
  }
}

export enum AuthProvider {
  apple = 'apple',
  google = 'google',
  naver = 'naver'
}
