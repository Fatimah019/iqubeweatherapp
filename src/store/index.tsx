import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { api } from './middleware/api';

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, api],
});

export default store;
