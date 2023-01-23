import { LoggerService } from '@app/logger'
import { Injectable } from '@nestjs/common'
import { Response } from 'express'
import * as morgan from 'morgan'

morgan.token('body', (req: any) => {
  return { ...req.body }
})

@Injectable()
export class LoggingMiddleware {
  constructor(private readonly logger: LoggerService) {}
  module = morgan(this.jsonFormat, {
    skip: (req) => req.body.operationName === 'IntrospectionQuery',
    stream: {
      write: (text) => {
        const { message, data } = this.parseHttpLog(text)
        this.logger.info(message, data)
      }
    }
  })

  private jsonFormat(tokens: morgan.TokenIndexer, req: any, res: Response) {
    return JSON.stringify({
      reqId: req.id,
      body: tokens.body(req, res),
      method: tokens.method(req, res),
      url: tokens.url(req, res),
      status: tokens.status(req, res),
      contentLength: tokens.res(req, res, 'content-length'),
      referrer: tokens.referrer(req, res),
      userAgent: tokens['user-agent'](req, res),
      responseTime: tokens['response-time'](req, res)
    })
  }

  private parseHttpLog(text: string): { message: string; data?: any } {
    try {
      const data = JSON.parse(text)
      const message = `"${data.method} ${data.url}" ${data.status} ${
        data.responseTime
      } ms${data.body ? ` - ${JSON.stringify(data.body)}` : ''}`
      delete data.body
      return { message, data }
    } catch (e) {
      return { message: text }
    }
  }
}
