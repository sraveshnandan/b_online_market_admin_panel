'use client';

import { Provider } from 'react-redux';
import React, { useRef } from 'react';
import { type Persistor, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { AppStore, makeStore } from '@/redux/store';

interface StoreProviderProps {
    children: React.ReactNode
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
    const storeRef = useRef<AppStore>();
    const persistorRef = useRef<Persistor>({} as Persistor);
    if (!storeRef.current) {
        storeRef.current = makeStore();
        persistorRef.current = persistStore(storeRef.current);
    }

    return (
        <Provider store={storeRef.current}>
            <PersistGate loading={null} persistor={persistorRef.current}>
                {children}
            </PersistGate>
        </Provider>
    );
};

export default StoreProvider;