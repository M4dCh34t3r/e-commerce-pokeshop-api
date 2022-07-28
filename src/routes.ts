import { CreateCartItemController } from "./controller/CreateCartItemController";
import { DeleteCartItemController } from "./controller/DeleteCartItemController";
import { CreateReviewController } from "./controller/CreateReviewController";
import { ListCartItemController } from "./controller/ListCartItemController";
import { ListReviewController } from "./controller/ListReviewController";
import { Router, Request, Response } from "express";

export const router = Router();

const createReviewController = new CreateReviewController();
const createCartItemController = new CreateCartItemController();

const deleteCartItemController = new DeleteCartItemController();

const listReviewController = new ListReviewController();
const listCartItemController = new ListCartItemController();

router.delete('/cart-items', deleteCartItemController.handle);

router.post('/reviews', createReviewController.handle);
router.post('/cart-items', createCartItemController.handle);

router.get('/reviews', listReviewController.handle);
router.get('/cart-items', listCartItemController.handle);

router.get('/', (request: Request, response: Response) => {
    return response.json({ message: "The PokeShop API is runninng!" });
});
