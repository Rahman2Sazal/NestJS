import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class StudentGuard implements CanActivate {
  

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    

    const request = context.switchToHttp().getRequest();
    

    const studentHeader = request.headers['x-student'];


    if (studentHeader === 'true') {
      return true; 
    }


    throw new UnauthorizedException('Missing or invalid student token');
  }
}