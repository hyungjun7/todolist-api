import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql'
import { AuthProvider } from '../../domain/user'

@ObjectType()
export class User {
  @Field(() => Int)
  id: number

  @Field()
  account: string

  @Field()
  nickname: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  profileImage?: string

  @Field(() => Boolean)
  status: boolean

  @Field(() => AuthProvider)
  provider: AuthProvider

  @Field(() => Date)
  createdAt?: Date
}

registerEnumType(AuthProvider, {
  name: 'AuthProvider'
})
