import { Router } from 'express';
import {
  executeGetProductById,
  executeGetProducts,
  executeUpdateProduct,
  executeDeleteProduct,
  executeAddProduct,
} from '../controllers/product-controller';
const router = Router();

router.get('/products', executeGetProducts);
router.get('/products/:id', executeGetProductById);
router.post('/products/edit/:id', executeUpdateProduct);
router.post('/products/add', executeAddProduct);
router.delete('/products/delete/:id', executeDeleteProduct);

export default router;
