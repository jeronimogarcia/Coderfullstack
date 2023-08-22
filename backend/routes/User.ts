import { Router } from 'express';
import { executeAddUser } from '../controllers/user-controller';
const router = Router();

router.post('/users/register', executeAddUser);

export default router;
