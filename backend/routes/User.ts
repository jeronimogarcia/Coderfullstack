import { Router } from 'express';
import { executeAddUser, executeLoginUser, executeGetUserWithToken } from '../controllers/user-controller';
const router = Router();

router.get('/users/token/:token', executeGetUserWithToken);
router.post('/users/login', executeLoginUser);
router.post('/users/register', executeAddUser);

export default router;
