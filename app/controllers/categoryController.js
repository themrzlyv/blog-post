import Category from '../models/Category.js'


export const getAllCategories = async (req,res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export const createCategory = async (req,res) => {
    try {
        const {name} = req.body
        if(!name || name.length <= 3) return res.status(400).json({error: "Please write correct name"});

        const category = await Category.findOne({name});
        if(category) return res.status(400).json({error: "This Category already exists"});

        const newcategory = await new Category({name}).save();
        res.status(200).json({success: true, msg: "Category is Created"})

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export const updateCategory = async (req,res) => {
    try {
        const {id} = req.params
        const {name} = req.body
        const category = await Category.findByIdAndUpdate({_id:id},{name},{new: true})
        res.status(200).json(category)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export const deleteCategory = async (req,res) => {
    try {
        const {id} = req.params
        const category = await Category.findByIdAndDelete({_id:id})
        res.status(200).json({success: true})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}