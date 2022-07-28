import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CartItem')
export class CartItem {

  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  shopItemId: number;

}
