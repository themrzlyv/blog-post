import express from 'express'
import postRouter from './postRoutes.js';
import categoryRouter from './categoryRoutes.js'
import userRouter from './userRoutes.js';

const routes = express.Router();

routes.use("/posts", postRouter);
routes.use("/category", categoryRouter)
routes.use('/user' , userRouter)

export default routes;