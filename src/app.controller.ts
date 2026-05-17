import { Controller, Get, UseFilters, UseGuards, ForbiddenException, Param } from '@nestjs/common';
import { ForbiddenExceptionFilter } from './forbidden-exception.filter';
import { StudentGuard } from './student.guard';
import { UppercasePipe } from './uppercase.pipe'; // 1. Import your new pipe

@Controller()
export class AppController {

  @Get('secret-data')
  @UseFilters(ForbiddenExceptionFilter) 
  getSecretData() {
    throw new ForbiddenException();
  }

  @Get('student-lounge')
  @UseGuards(StudentGuard)
  getStudentLounge() {
    return 'Welcome to the exclusive student lounge!';
  }

  // 2. Add the dynamic route here and apply the Pipe inside the @Param decorator
  @Get('hello/:name')
  getName(@Param('name', UppercasePipe) name: string) {
    // The 'name' variable here will already be transformed to uppercase by the time this code runs!
    return `Hello, ${name}!`;
  }

  @Get('public-data')
  getPublicData() {
    return 'This is public information!';
  }
}