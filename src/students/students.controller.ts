import { Controller, Get } from '@nestjs/common';
import { StudentService } from './students.service';

@Controller('students')
export class StudentsController {
    constructor(private StudentService: StudentService) {}

    /*
    * main route students
    */
    @Get()
    showAll() {
        return this.StudentService.showAll();
    }
}
