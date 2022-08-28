import { combineReducers } from "redux";
import postReducer from "./reducer";
const rootReducer=combineReducers({
    users: postReducer
});
export default rootReducer;