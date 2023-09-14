import { Router } from 'express';
import authController from '../controllers/authController.js';
import { emailExist } from '../middlewares/emailExists.js';
import passport from '../middlewares/passport.js';
import validator from '../middlewares/validator.js'
import { signInSchema } from '../validators/signInValidator.js';
import { signUpSchema } from '../validators/signUpValidator.js';

const authRouter = Router()

authRouter.post('/up', validator(signUpSchema), emailExist, authController.signUp);
authRouter.post('/in', validator(signInSchema), authController.signIn);
authRouter.get('/token', passport.authenticate( 'jwt', {session:false} ), authController.getUser);
authRouter.put('/token', passport.authenticate( 'jwt', {session:false} ), authController.updateUser);
authRouter.delete('/token', passport.authenticate( 'jwt', {session:false} ), authController.deleteUser);

export default authRouter
