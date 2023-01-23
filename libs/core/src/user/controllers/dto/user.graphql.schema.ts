import { Field, InputType, Int, ObjectType, registerEnumType } from '@nestjs/graphql'
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

@InputType()
export class CreateUserInput {
  @Field()
  account: string

  @Field()
  nickname: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  profileImage?: string

  @Field()
  socialToken: string

  @Field(() => AuthProvider)
  provider: AuthProvider
}

registerEnumType(AuthProvider, {
  name: 'AuthProvider'
})
