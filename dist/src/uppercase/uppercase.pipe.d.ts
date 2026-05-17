import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class UppercasePipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): string;
}
