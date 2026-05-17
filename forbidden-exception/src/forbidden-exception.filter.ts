import { ExceptionFilter, Catch, ArgumentsHost, HttpException, ForbiddenException } from '@nestjs/common';
import { Response } from 'express';

// 1. Tell NestJS exactly which error this filter is looking for
@Catch(ForbiddenException)
export class ForbiddenExceptionFilter implements ExceptionFilter {
  
  // 2. The catch method executes automatically when the error happens
  catch(exception: ForbiddenException, host: ArgumentsHost) {
    // Switch the context to HTTP (since NestJS can also do WebSockets/Microservices)
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // 3. Craft your custom JSON response structure
    response
      .status(403) // Forbidden status code
      .json({
        status: 'error',
        reason: 'Access denied',
        timestamp: new Date().toISOString(),
      });
  }
}