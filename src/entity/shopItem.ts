import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ShopItem')
export class ShopItem {

  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  shoItemId: number;

}
