import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
})

export class AppModule implements NestModule {
  
  configure(consumer: MiddlewareConsumer) {
    consumer
   
      .apply(LoggerMiddleware)
      
      .forRoutes({ path: 'students', method: RequestMethod.GET });
  }
}