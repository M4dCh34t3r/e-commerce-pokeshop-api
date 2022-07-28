import { ShopItemRepository } from "../repository/ShopItemRepository";
import { getCustomRepository } from "typeorm";

interface ShopItemProps {
  id: number;
}

export class DeleteShopItemService {
  async execute({ id }: ShopItemProps) {
    const shopItemRepository = getCustomRepository(ShopItemRepository);

    if (!id) {
        throw new Error("Please, insert the internal item id...");
    }

    const deletedShopItem = await shopItemRepository.delete({ id });
    return deletedShopItem;
  }
}
