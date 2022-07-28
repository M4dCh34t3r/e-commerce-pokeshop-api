import { CartItemRepository } from "../repository/CartItemRepository";
import { getCustomRepository } from "typeorm";

export class ListCartItemService{
  async execute() {
    const shopItemRepository = getCustomRepository(CartItemRepository);
    const allCartItems = await shopItemRepository.find();
    return allCartItems;
  }
}
