import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform {
  

  transform(value: any, metadata: ArgumentMetadata) {
    

    if (!value || typeof value !== 'string') {
      throw new BadRequestException('Validation failed: Input must be a valid string');
    }


    return value.toUpperCase();
  }
}