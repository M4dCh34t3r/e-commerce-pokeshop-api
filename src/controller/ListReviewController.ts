import { ListReviewService } from "../service/ListReviewService";
import { Request, Response } from "express";

class ListReviewController {
  async handle(request: Request, response: Response){
    const listReviewService = new ListReviewService();
    const listedReviews = await listReviewService.execute();
    return response.json(listedReviews);
  }
}

export { ListReviewController }
