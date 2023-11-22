import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './user';
import { LoggerMiddleware } from './logger.middleware';
import db from './db';


@Module({
  imports: [UserModule, db],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}