import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('Review')
export class Review {

    @PrimaryGeneratedColumn()
    readonly id: string;

    @Column()
    author: string;

    @Column()
    message: string;

    @CreateDateColumn()
    creationDate: Date;

}
