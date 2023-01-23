import { LoggerService } from '@app/logger'
import { LoggingMiddleware } from '@app/middlewares/logging.middleware'
import { NestFactory } from '@nestjs/core'
import { ApiModule } from './api.module'

async function bootstrap() {
  const app = await NestFactory.create(ApiModule)
  const logger = app.get(LoggerService)
  const loggingMiddleware = app.get(LoggingMiddleware)
  app.useLogger(logger)
  app.use(loggingMiddleware.module)
  await app.listen(4000)
}
bootstrap()
