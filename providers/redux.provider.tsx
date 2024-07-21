"use client"
import { store } from '@/redux/store'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import persistStore from 'redux-persist/es/persistStore'

persistStore(store)
const ReduxProvider = ({ children }: {
    children: ReactNode
}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider