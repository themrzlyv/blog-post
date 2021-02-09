import express from 'express'
import { getUser, login, Logout, refreshToken, register } from '../controllers/userController.js'
import { Auth } from '../helpers/middlewares/Auth.js'

const userRouter = express.Router()

userRouter.post("/register", register)
userRouter.post("/login", login)

userRouter.get("/refresh_token" , refreshToken)
userRouter.delete("/logout", Logout)


userRouter.get("/info" , Auth ,getUser)


export default userRouter;