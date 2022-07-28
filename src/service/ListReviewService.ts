import { ReviewRepository } from "../repository/ReviewRepository";
import { getCustomRepository } from "typeorm";

export class ListReviewService{
  async execute() {
    const reviewRepository = getCustomRepository(ReviewRepository);
    const allMessages = await reviewRepository.find();
    return allMessages;
  }
}
