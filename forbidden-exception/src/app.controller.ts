import { Controller, Get, UseFilters, ForbiddenException } from '@nestjs/common';
import { ForbiddenExceptionFilter } from './forbidden-exception.filter'; // Import your new filter

@Controller()
export class AppController {

  @Get('secret-data')
  // 1. Apply the filter ONLY to this method
  @UseFilters(ForbiddenExceptionFilter) 
  getSecretData() {
    // 2. Deliberately trigger the exception to test your filter
    throw new ForbiddenException();
  }

  @Get('public-data')
  // This method doesn't have the filter, so it acts normally
  getPublicData() {
    return 'This is public information!';
  }
}