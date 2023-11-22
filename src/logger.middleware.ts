import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger(LoggerMiddleware.name);

  use(request: Request, response: Response, next: NextFunction): void {
    const startAt = process.hrtime();
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    const { ip, originalUrl, method, params, query, body, headers } = request;
    const userAgent = request.get('user-agent') || '';
    response.on('close', () => {
      const { statusCode } = response;
      const contentLength = response.get('content-length');
      const diff = process.hrtime(startAt);
      const responseTime = diff[0] * 1e3 + diff[1] * 1e-6;
      const result = {
        originalUrl,
        method,
        headers,
        params,
        query,
        body,
        ip,
        contentLength,
        statusCode,
        responseTime,
        userAgent,
      };
      /* eslint-enable */
      this.logger.log(
        `Request and response details: ${JSON.stringify(result)}`,
      );
    });
    next();
  }
}
