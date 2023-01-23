import { GraphQLError } from 'graphql'

export class CommonServerException extends GraphQLError {
  constructor(message: string) {
    super(message)
  }
}

export class NotFoundException extends CommonServerException {
  constructor(message: string) {
    super(message)
  }
}
