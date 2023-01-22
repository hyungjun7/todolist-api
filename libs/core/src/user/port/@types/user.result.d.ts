export interface FindUserResult {
  id: number
  account: string
  nickname: string
  description?: string
  provider: string
  status: boolean
  createdAt: Date
}
