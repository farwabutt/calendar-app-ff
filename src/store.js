import {configureStore} from '@reduxjs/toolkit';
import calenderReducer from './features/calender/calender.slice';

export const store = configureStore({
    reducer: {
        calender: calenderReducer
    },
});