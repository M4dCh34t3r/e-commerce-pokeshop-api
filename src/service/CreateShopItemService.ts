import { ShopItemRepository } from "../repository/ShopItemRepository";
import { getCustomRepository } from "typeorm";

interface ShopItemProps {
  shopItemId: number;
}

export class CreateShopItemService {
  async execute({ shopItemId }: ShopItemProps) {
    const shopItemRepository = getCustomRepository(ShopItemRepository);

    if (!shopItemId) {
        console.log("Please, insert an item id...");
    }

    const createdShopItem = shopItemRepository.create({ shopItemId });
    await shopItemRepository.save(createdShopItem);
    return createdShopItem;
  }
}
