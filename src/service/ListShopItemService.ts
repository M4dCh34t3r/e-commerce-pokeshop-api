import { ShopItemRepository } from "../repository/ShopItemRepository";
import { getCustomRepository } from "typeorm";

export class ListShopItemService{
  async execute() {
    const shopItemRepository = getCustomRepository(ShopItemRepository);
    const allShopItems = await shopItemRepository.find();
    return allShopItems;
  }
}
