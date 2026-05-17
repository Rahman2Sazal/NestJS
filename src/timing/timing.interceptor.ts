import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements NestInterceptor {
  
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
   
    const startTime = Date.now();

   
    return next.handle().pipe(
   
      tap(() => {
        const duration = Date.now() - startTime;
        
        console.log(`Execution time: ${duration}ms`);
      }),
      
     
      map((data) => {
        const duration = Date.now() - startTime;
        
        
        if (typeof data === 'object' && data !== null) {
          return {
            ...data,
            meta: {
              executionTime: `${duration}ms`,
            },
          };
        }
        
        
        return {
          response: data,
          meta: { executionTime: `${duration}ms` }
        };
      }),
    );
  }
}