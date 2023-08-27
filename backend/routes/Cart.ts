import { Router } from 'express';
import { executeAddCart } from '../controllers/cart-controller';
const router = Router();

router.post('/cart/add/:userId', executeAddCart);

export default router;
