import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({ 
    posts: postReducer, 
    category: categoryReducer
});

export default rootReducer;