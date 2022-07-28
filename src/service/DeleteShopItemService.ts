import { ShopItemRepository } from "../repository/ShopItemRepository";
import { getCustomRepository } from "typeorm";

interface ShopItemProps {
  shopItemId: number;
}

export class DeleteShopItemService {
  async execute({ shopItemId }: ShopItemProps) {
    const shopItemRepository = getCustomRepository(ShopItemRepository);

    if (!shopItemId) {
        throw new Error("Please, insert an item id...");
    }

    const deletedShopItem = await shopItemRepository.delete({ shopItemId });
    return deletedShopItem;
  }
}
