import { CreateReviewService } from "../service/CreateReviewService";
import { Request, Response } from "express";

class CreateReviewController {
  async handle(request: Request, response: Response){
    const { author, message } = request.body;
    const createReviewService = new CreateReviewService();
    const createdReview = await createReviewService.execute({ author, message});
    return response.json(createdReview);
  }
}

export { CreateReviewController }
