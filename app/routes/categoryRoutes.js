import express from 'express'
import { createCategory, deleteCategory, getAllCategories, updateCategory } from '../controllers/categoryController.js';


const categoryRouter = express.Router();

categoryRouter.get("/", getAllCategories)
categoryRouter.post("/", createCategory)
categoryRouter.put("/:id", updateCategory)
categoryRouter.delete("/:id", deleteCategory)


export default categoryRouter;