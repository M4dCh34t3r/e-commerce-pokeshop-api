import { ReviewRepository } from "../repository/ReviewRepository";
import { getCustomRepository } from "typeorm";

interface ReviewProps {
  author: string;
  message: string;
}

class CreateReviewService {
  async execute({ author, message }: ReviewProps) {
    const reviewRepository = getCustomRepository(ReviewRepository);

    if (!author) {
        throw new Error("Please, insert an author...");
    }

    if (!message) {
        throw new Error("Please, insert a message...");
    }

    const createdReview = reviewRepository.create({ author, message });
    await reviewRepository.save(createdReview);
    return createdReview;
  }
}

export { CreateReviewService }
