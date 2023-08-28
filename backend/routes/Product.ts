import { Router } from 'express';
import {
  executeGetProductById,
  executeGetProducts,
  executeUpdateProduct,
  executeDeleteProduct,
  executeAddProduct,
} from '../controllers/product-controller';
import { authToken } from '../auth/cookies';
import { isAdmin } from '../middleware/authorization';
const router = Router();

router.get('/products', authToken, executeGetProducts);
router.get('/products/admin', authToken, isAdmin, executeGetProducts);
router.get('/products/:id', executeGetProductById);
router.post('/products/edit/:id', authToken, isAdmin, executeUpdateProduct);
router.post('/products/add', authToken, isAdmin, executeAddProduct);
router.delete('/products/delete/:id', authToken, isAdmin, executeDeleteProduct);

export default router;
