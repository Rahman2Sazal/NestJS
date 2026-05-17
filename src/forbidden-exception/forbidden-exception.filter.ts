import { ExceptionFilter, Catch, ArgumentsHost, HttpException, ForbiddenException } from '@nestjs/common';
import { Response } from 'express';


@Catch(ForbiddenException)
export class ForbiddenExceptionFilter implements ExceptionFilter {
  

  catch(exception: ForbiddenException, host: ArgumentsHost) {

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();


    response
      .status(403) 
      .json({
        status: 'error',
        reason: 'Access denied',
        timestamp: new Date().toISOString(),
      });
  }
}