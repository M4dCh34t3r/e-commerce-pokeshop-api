import { ListShopItemService } from "../service/ListShopItemService";
import { Request, Response } from "express";

export class ListShopItemController {
  async handle(request: Request, response: Response){
    const listShopItemService = new ListShopItemService();
    const listedShopItems = await listShopItemService.execute();
    return response.json(listedShopItems);
  }
}
