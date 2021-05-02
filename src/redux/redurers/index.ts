import { combineReducers } from "redux";
import authReducer from "./sessionReducer"

let reducers = combineReducers({
    auth: authReducer
})

export default reducers