import express from "express";
import { auth } from "../middlewares/auth";
import { getUserCreations, getPublishedCreations, toggleLikeCreation } from "../controllers/userController";

const userRouter = express.Router()

userRouter.get('/get-user-creations', auth, getUserCreations)
userRouter.get('/get-published-creations', auth, getPublishedCreations)
userRouter.get('/toggle-like-creations', auth, toggleLikeCreation)


export default userRouter; 