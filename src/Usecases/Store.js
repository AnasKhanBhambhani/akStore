import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Toggle from './Slices/ToggleSlices.jsx';
import fetchedData from './Slices/ProductSlice.jsx';
import myCategory from './Slices/CategorySlice.jsx';
import myProductById from './Slices/ProductByIdSlice.jsx';
import AddToCart from './Slices/AddToCartSlice.jsx';
import LogIn from './Slices/LoginSlice.jsx';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

// Configuration for redux-persist
const persistConfig = {
    key: 'addToCart',
    storage,
};


// Only persist AddToCart slice
const persistedAddToCartReducer = persistReducer(persistConfig, AddToCart);

// Combine other reducers
const rootReducer = combineReducers({
    toggle: Toggle,
    myProducts: fetchedData,
    myProduct: myProductById,
    myCategory: myCategory,
    AddToCart: persistedAddToCartReducer, // Use persisted reducer here
    LogIn: LogIn,
});

// Configure store with the persisted reducer
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'], // Ignore the specific action causing the issue
            },
        }),
});

const persistor = persistStore(store);

export { store, persistor };
export default store;