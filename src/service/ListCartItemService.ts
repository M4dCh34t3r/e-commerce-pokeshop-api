import { CartItemRepository } from "../repository/CartItemRepository";
import { getCustomRepository } from "typeorm";

class ListCartItemService{
  async execute() {
    const shopItemRepository = getCustomRepository(CartItemRepository);
    const allCartItems = await shopItemRepository.find();
    return allCartItems;
  }
}

export { ListCartItemService }
