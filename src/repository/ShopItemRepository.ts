import { EntityRepository, getRepository, Repository } from "typeorm";
import { ShopItem } from "../entity/ShopItem";

@EntityRepository(ShopItem)
class ShopItemRepository extends Repository<ShopItem> {}

export { ShopItemRepository }
