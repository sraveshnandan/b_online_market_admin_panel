import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import mainReducers from "./reducers/main.reducers";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
    whiteList: ["main"]
}


const rooReducer = combineReducers({
    main: mainReducers
})


const persistedReducers = persistReducer(persistConfig, rooReducer)

const store = configureStore({
    reducer: persistedReducers,

})

const persistor = persistStore(store)


export {
    store,
    persistor
}