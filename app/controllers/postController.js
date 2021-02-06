import Apifeaturing from '../helpers/ApiFeatures.js'
import { Postvalidate } from '../helpers/ErrorHandler.js'
import Post from '../models/Post.js'

export const getAllPosts = async(req,res) => {
    try {
        const featuring = new Apifeaturing(Post.find() , req.query).filtering().searching()
        
        const posts = await featuring.query;
        res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export const createPost = async (req,res) => {
    try {
        const {title,category,description} = req.body;

        const errMsg = Postvalidate(title,category,description);
        if(errMsg) return res.status(400).json({error: errMsg});
        const newpost = await new Post({
            title,
            category,
            description
        }).save();
        res.json({success: true});
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


export const getPost = async (req,res) => {
    try {
        const {id} = req.params
        const post = await Post.findOne({_id: id})
        res.status(200).json(post);
    } catch (error) {
        return res.status(400).json({error: "Post couldn't find! Maybe Deleted"})
    }
}


export const updatePost = async (req,res) => {
    try {
        const {id} = req.params
        const {title,category, description} = req.body
        const errMsg = Postvalidate(title,category,description);
        if(errMsg) return res.status(400).json({error: errMsg});
        const post = await Post.findByIdAndUpdate({_id: id}, {title, category, description},{new: true})
        res.status(200).json(post);
    } catch (error) {
        return res.status(400).json({error: "Post couldn't find! Maybe Deleted"})
    }
}


export const deletePost = async (req,res) => {
    try {
        const {id} = req.params
        const post = await Post.findByIdAndDelete({_id: id})
        res.status(200).json({success: true});
    } catch (error) {
        return res.status(400).json({error: "Post couldn't find! Maybe Deleted"})
    }
}