import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common'
import { LoggerService } from '@app/logger/logger.service'

@Catch()
export class ExceptionHandler implements ExceptionFilter {
  constructor(private logger: LoggerService) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx: any = host.switchToHttp()
    const request = ctx.args[2].req
    const body = { reqId: request.id }
    this.logger.error(exception, body)
    throw exception
  }
}
