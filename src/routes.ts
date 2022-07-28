import { CreateShopItemController } from "./controller/CreateShopItemController";
import { DeleteShopItemController } from "./controller/DeleteShopItemController";
import { CreateReviewController } from "./controller/CreateReviewController";
import { ListShopItemController } from "./controller/ListShopitemController";
import { ListReviewController } from "./controller/ListReviewController";
import { Router, Request, Response } from "express";

export const router = Router();

const createReviewController = new CreateReviewController();
const createShopItemController = new CreateShopItemController();

const deleteShopItemController = new DeleteShopItemController();

const listReviewController = new ListReviewController();
const listShopItemController = new ListShopItemController();

router.delete('/shop-items', deleteShopItemController.handle);

router.post('/reviews', createReviewController.handle);
router.post('/shop-items', createShopItemController.handle);

router.get('/reviews', listReviewController.handle);
router.get('/shop-items', listShopItemController.handle);

router.get('/', (request: Request, response: Response) => {
    return response.json({ message: "The PokeShop API is runninng!" });
});
