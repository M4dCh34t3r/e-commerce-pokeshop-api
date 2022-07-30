import { DeleteCartItemService } from "../service/DeleteCartItemService";
import { Request, Response } from "express";

class DeleteCartItemController {
  async handle(request: Request, response: Response){
    const { id } = request.body;
    const deleteCartItemService = new DeleteCartItemService();
    const deletedCartItem = await deleteCartItemService.execute({ id });
    return response.json(deletedCartItem);
  }
}

export { DeleteCartItemController }
