import { CoreModule } from '@app/core'
import { AssignIdMiddleware } from '@app/middlewares'
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ApiController } from './api.controller'
import { ApiService } from './api.service'

@Module({
  imports: [CoreModule],
  controllers: [ApiController],
  providers: [ApiService]
})
export class ApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AssignIdMiddleware).forRoutes('*')
  }
}
