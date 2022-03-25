import { configureStore } from "@reduxjs/toolkit";
import calcExpReducer from '../features/calcExpSlice';
import totalReducer from '../features/totalSlice';

const store = configureStore({
    reducer: {
        calcExp: calcExpReducer,
        total: totalReducer
    }
});

export default store;