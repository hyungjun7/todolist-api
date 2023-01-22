import { Injectable, NestMiddleware } from '@nestjs/common'
import { v4 as uuidV4 } from 'uuid'

@Injectable()
export class AssignIdMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    req.id = uuidV4()
    next()
  }
}
