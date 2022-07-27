import { CreateReviewController } from "./controller/CreateReviewController";
import { ListReviewController } from "./controller/ListReviewController";
import { Router, Request, Response } from "express";

export const router = Router();

const createReviewController = new CreateReviewController();
const listReviewController = new ListReviewController();

router.get('/reviews', listReviewController.handle)
router.post('/reviews', createReviewController.handle)

router.get('/', (request: Request, response: Response) => {
    return response.json({ message: "The PokeShop API is runninng!" })
})
