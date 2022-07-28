import { CreateCartItemService } from "../service/CreateCartItemService";
import { Request, Response } from "express";

class CreateCartItemController {
  async handle(request: Request, response: Response){
    const { shopItemId } = request.body;
    const createCartItemService = new CreateCartItemService();
    const createdCartItem = await createCartItemService.execute({ shopItemId });
    return response.json(createdCartItem);
  }
}

export { CreateCartItemController }
