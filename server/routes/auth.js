import express from 'express';

import { getUsers, getUser } from '../controllers/auth.js';

const router = express.Router();

router.get('/', getUsers); 
router.post('/login', getUser);

export default router;