import { CoreModule } from '@app/core'
import { LoggerModule } from '@app/logger'
import { AssignIdMiddleware } from '@app/middlewares'
import { LoggingMiddleware } from '@app/middlewares/logging.middleware'
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ApiController } from './api.controller'
import { ApiService } from './api.service'

@Module({
  imports: [CoreModule, LoggerModule],
  controllers: [ApiController],
  providers: [ApiService, LoggingMiddleware]
})
export class ApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AssignIdMiddleware).forRoutes('*')
  }
}
