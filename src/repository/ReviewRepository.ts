import { EntityRepository, getRepository, Repository } from "typeorm";
import { Review } from "../entity/Review";

@EntityRepository(Review)
class ReviewRepository extends Repository<Review> {}

export { ReviewRepository }
