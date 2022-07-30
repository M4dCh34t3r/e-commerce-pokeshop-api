import { ReviewRepository } from "../repository/ReviewRepository";
import { getCustomRepository } from "typeorm";

class ListReviewService{
  async execute() {
    const reviewRepository = getCustomRepository(ReviewRepository);
    const allMessages = await reviewRepository.find();
    return allMessages;
  }
}

export { ListReviewService }
