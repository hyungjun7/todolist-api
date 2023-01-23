import { CoreModule } from '@app/core'
import { ExceptionHandler } from '@app/core/common/exception.handler'
import { LoggerModule } from '@app/logger'
import { AssignIdMiddleware } from '@app/middlewares'
import { LoggingMiddleware } from '@app/middlewares/logging.middleware'
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { APP_FILTER } from '@nestjs/core'
import { ApiController } from './api.controller'
import { ApiService } from './api.service'

@Module({
  imports: [CoreModule, LoggerModule],
  controllers: [ApiController],
  providers: [
    ApiService,
    LoggingMiddleware,
    {
      provide: APP_FILTER,
      useClass: ExceptionHandler
    }
  ]
})
export class ApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AssignIdMiddleware).forRoutes('*')
  }
}
