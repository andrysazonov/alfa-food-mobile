import {compose, applyMiddleware, createStore, combineReducers} from "redux";
import thunk from "redux-thunk"
import { ThunkAction} from "redux-thunk";
import { Action } from "redux";
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from "redux-persist"
import auth from "./redurers/sessionReducer";
import { reducer as formReducer } from "redux-form"

let rootReducer = combineReducers({
    auth: auth,
    form: formReducer
})
export type RootState = ReturnType<typeof rootReducer>


const persistConfig = {
    key: "root",
    storage: AsyncStorage
}

const middlewares = [thunk]

const enhancer = compose(applyMiddleware(...middlewares))
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, enhancer)

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;