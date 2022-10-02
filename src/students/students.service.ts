import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Students } from './students.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Students)
        private studentRepository: Repository<Students> // make variable
    ) { }

    /*
    * Show all data from table
    */
    async showAll() {
        return this.studentRepository.find()
    }
}
