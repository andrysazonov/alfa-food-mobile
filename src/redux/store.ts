import { compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
// import storage from "redux-persist/lib/storage";
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from "redux-persist"
import reducer from "./redurers/index"


const persistConfig = {
    key: "root",
    storage: AsyncStorage
}

const middlewares = [thunk]

export default function configureStore() {
    const enhancer = compose(applyMiddleware(...middlewares));
    const persistedReducer = persistReducer(persistConfig, reducer);
    const store = createStore(persistedReducer, enhancer);
    //@ts-ignore
    const persistor = persistStore(store);
    return { store, persistor };
}
