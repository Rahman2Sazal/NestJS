import { Controller, Get, UseFilters, UseGuards, ForbiddenException, Param } from '@nestjs/common';
import { ForbiddenExceptionFilter } from './forbidden-exception/forbidden-exception.filter';
import { StudentGuard } from './student/student.guard';
import { UppercasePipe } from './uppercase/uppercase.pipe';
import { TimingInterceptor } from './timing/timing.interceptor'; // 1. Import your new pipe

@Controller()
export class AppController {

  @Get('secret-data')
  @UseFilters(ForbiddenExceptionFilter) 
  getSecretData() {
    throw new ForbiddenException();
  }
  @Get('students')
  getStudents() {
    return ['Student A', 'Student B', 'Student C'];
  }

  @Get('student-lounge')
  @UseGuards(StudentGuard)
  getStudentLounge() {
    return 'Welcome to the exclusive student lounge!';
  }

  
  @Get('hello/:name')
  getName(@Param('name', UppercasePipe) name: string) {
   
    return `Hello, ${name}!`;
  }

@Get('performance-data')
  @UseInterceptors(TimingInterceptor)
  getPerformanceData() {
    return {
      message: 'This database call was tracked and clocked!',
      status: 'success'
    };
  }
  @Get('public-data')
  getPublicData() {
    return 'This is public information!';
  }
}