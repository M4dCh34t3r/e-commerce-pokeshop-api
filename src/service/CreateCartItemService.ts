import { CartItemRepository } from "../repository/CartItemRepository";
import { getCustomRepository } from "typeorm";

interface CartItemProps {
  shopItemId: number;
}

export class CreateCartItemService {
  async execute({ shopItemId }: CartItemProps) {
    const shopItemRepository = getCustomRepository(CartItemRepository);

    if (!shopItemId) {
        console.log("Please, insert an item id...");
    }

    const createdCartItem = shopItemRepository.create({ shopItemId });
    await shopItemRepository.save(createdCartItem);
    return createdCartItem;
  }
}
