import express from 'express'
import { createPost, deletePost, getAllPosts, getPost, updatePost } from '../controllers/postController.js';

const postRouter = express.Router();


postRouter.get('/', getAllPosts);
postRouter.get('/:id', getPost);

postRouter.post('/', createPost)

postRouter.put('/:id', updatePost)
postRouter.delete('/:id' , deletePost)


export default postRouter;