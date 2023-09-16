import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from './taskSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filtersReducer,
  },
});
