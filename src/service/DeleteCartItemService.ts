import { CartItemRepository } from "../repository/CartItemRepository";
import { getCustomRepository } from "typeorm";

interface CartItemProps {
  id: number;
}

export class DeleteCartItemService {
  async execute({ id }: CartItemProps) {
    const shopItemRepository = getCustomRepository(CartItemRepository);

    if (!id) {
        throw new Error("Please, insert the internal item id...");
    }

    const deletedCartItem = await shopItemRepository.delete({ id });
    return deletedCartItem;
  }
}
