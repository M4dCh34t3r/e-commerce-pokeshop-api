import { CreateShopItemService } from "../service/CreateShopItemService";
import { Request, Response } from "express";

class CreateReviewController {
  async handle(request: Request, response: Response){
    const { shopItemId } = request.body;
    const createShopItemService = new CreateShopItemService();
    const createdShopItem = await createShopItemService.execute({ shopItemId });
    return response.json(createdShopItem);
  }
}

export { CreateReviewController }
