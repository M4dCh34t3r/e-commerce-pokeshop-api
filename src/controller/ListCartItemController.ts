import { ListCartItemService } from "../service/ListCartItemService";
import { Request, Response } from "express";

class ListCartItemController {
  async handle(request: Request, response: Response){
    const listCartItemService = new ListCartItemService();
    const listedCartItems = await listCartItemService.execute();
    return response.json(listedCartItems);
  }
}

export { ListCartItemController }
