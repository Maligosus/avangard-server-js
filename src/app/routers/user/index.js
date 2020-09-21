import express from 'express'
import UserController from '../../controllers/user';

const router=express.Router();

router.post("/",UserController.loginUser);
router.post("/verify",UserController.verifyUser);

export default router;