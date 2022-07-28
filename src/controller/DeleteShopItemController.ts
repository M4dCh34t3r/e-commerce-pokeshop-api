import { DeleteShopItemService } from "../service/DeleteShopItemService";
import { Request, Response } from "express";

export class DeleteShopItemController {
  async handle(request: Request, response: Response){
    const { id } = request.body;
    const deleteShopItemService = new DeleteShopItemService();
    const deletedShopItem = await deleteShopItemService.execute({ id });
    return response.json(deletedShopItem);
  }
}
