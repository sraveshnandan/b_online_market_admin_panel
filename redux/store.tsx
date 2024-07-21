import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducers from "./reducers/main.reducers";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "@/ssr-safe-storage";

const persistConfig = {
    key: "root",
    storage,

}


const rooReducer = combineReducers({
    main: mainReducers
})


const persistedReducers = persistReducer(persistConfig, rooReducer)

export const makeStore = () => {
    return configureStore({
        reducer: persistedReducers,

        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rooReducer>;



