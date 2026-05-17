import { Controller, Get, UseFilters, UseGuards, ForbiddenException } from '@nestjs/common';
import { ForbiddenExceptionFilter } from '../../src/forbidden-exception/forbidden-exception.filter';

import { StudentGuard } from '../../src/student/student.guard';
import { UppercasePipe } from 'C:\Users\Administrator\Administrator\NestJS\src\uppercase\uppercase.pipe.ts';
 
@Controller()
export class AppController {

  // This route uses the Exception Filter
  @Get('secret-data')
  @UseFilters(ForbiddenExceptionFilter) 
  getSecretData() {
    throw new ForbiddenException();
  }

  // 2. Add this NEW route right here that uses the Guard
  @Get('student-lounge')
  @UseGuards(StudentGuard)
  getStudentLounge() {
    return 'Welcome to the exclusive student lounge!';
  }
  @Get('hello/:name')
  getName(@Param('name', UppercasePipe) name: string) {
    // The 'name' variable here will already be transformed to uppercase by the time this code runs!
    return `Hello, ${name}!`;
  }

  // This route is completely open
  @Get('public-data')
  getPublicData() {
    return 'This is public information!';
  }
}