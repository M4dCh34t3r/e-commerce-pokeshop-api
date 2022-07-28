import { Column, Entity } from 'typeorm';

@Entity('ShopItem')
export class ShopItem {

    @Column()
    shoItemId: number;

  }
