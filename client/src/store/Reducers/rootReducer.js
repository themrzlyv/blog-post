import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({ 
    posts: postReducer, 
    category: categoryReducer,
    user: userReducer
});

export default rootReducer;