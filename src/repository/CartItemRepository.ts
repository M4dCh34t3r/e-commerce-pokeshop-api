import { EntityRepository, getRepository, Repository } from "typeorm";
import { CartItem } from "../entity/CartItem";

@EntityRepository(CartItem)
class CartItemRepository extends Repository<CartItem> {}

export { CartItemRepository }
