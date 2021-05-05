import { combineReducers } from "redux";

import authReducer from "./sessionReducer"
import restaurantReducer from "./restaurantReducer";
import searchReducer from "./searchReducer";
import favouritesReducer from "./favouritesReducer";


let reducers = combineReducers({
    auth: authReducer,
    restaurant: restaurantReducer,
    search: searchReducer,
    favourites: favouritesReducer
})

export default reducers