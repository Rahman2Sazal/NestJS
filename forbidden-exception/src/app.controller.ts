import { Controller, Get, UseFilters, UseGuards, ForbiddenException } from '@nestjs/common';
import { ForbiddenExceptionFilter } from './forbidden-exception.filter';
// 1. Import the guard from its actual location in the src folder
import { StudentGuard } from '../../src/student/student.guard';
 
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

  // This route is completely open
  @Get('public-data')
  getPublicData() {
    return 'This is public information!';
  }
}