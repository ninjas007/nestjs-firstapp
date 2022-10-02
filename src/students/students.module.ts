import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentService } from './students.service';
import { Students } from './students.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forFeature([Students])],
  controllers: [StudentsController],
  providers: [StudentService]
})
export class StudentsModule {}
