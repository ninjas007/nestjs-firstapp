import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Students {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    class: string;
}