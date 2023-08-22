import { Router } from 'express';
import { executeAddUser, executeLoginUser } from '../controllers/user-controller';
const router = Router();

router.post('/users/login', executeLoginUser);
router.post('/users/register', executeAddUser);

export default router;
