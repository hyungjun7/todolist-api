import { Injectable, LoggerService as NestLoggerService } from '@nestjs/common'
import { format, createLogger, Logger, transports } from 'winston'

const loggerLevels = {
  levels: {
    error: 1,
    warn: 2,
    info: 3,
    http: 4,
    verbose: 5,
    debug: 6
  }
}

const colorize = format.colorize()

const consoleLoggerFormat = format.printf(
  ({ level, message, timestamp, stack, reqId }) => {
    let logMessage = ''
    if (reqId) logMessage += `${reqId} - `
    logMessage += `${stack || message}`
    return `${colorize.colorize(
      level,
      `[${timestamp}][${level.toUpperCase()}]`
    )} - ${logMessage}`
  }
)

@Injectable()
export class LoggerService implements NestLoggerService {
  logger: Logger
  constructor() {
    this.logger = createLogger({
      levels: loggerLevels.levels,
      format: format.combine(
        format.timestamp(),
        format.errors({ stack: true }),
        consoleLoggerFormat
      ),
      transports: [
        new transports.Console({
          level: 'debug',
          handleExceptions: true
        })
      ]
    })
  }
  log(message: any, ...optionalParams: any[]) {
    this.logger.info(message, ...optionalParams)
  }
  info(message: any, ...optionalParams: any[]) {
    this.logger.info(message, ...optionalParams)
  }
  error(message: any, ...optionalParams: any[]) {
    this.logger.error(message, ...optionalParams)
  }
  warn(message: any, ...optionalParams: any[]) {
    this.logger.warn(message, ...optionalParams)
  }
  debug?(message: any, ...optionalParams: any[]) {
    this.logger.debug(message, ...optionalParams)
  }
  verbose?(message: any, ...optionalParams: any[]) {
    this.logger.verbose(message, ...optionalParams)
  }
}
