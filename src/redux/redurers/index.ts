import { combineReducers } from "redux";

import authReducer from "./sessionReducer"
import restaurantReducer from "./restaurantReducer";
import searchReducer from "./searchReducer";

let reducers = combineReducers({
    auth: authReducer,
    restaurant: restaurantReducer,
    search: searchReducer
})

export default reducers