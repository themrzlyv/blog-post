import mongoose from 'mongoose';



const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description:{
        type:String,
        required: true,
        maxlength: [120,'Description must be max 120 character']
    }
}, {timestamps: true});


export default mongoose.models.Post || mongoose.model("Post", PostSchema);