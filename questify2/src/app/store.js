import { configureStore } from '@reduxjs/toolkit';
import {toDoReducer} from "../features/toDoTasks/ToDoSlice";

export const store = configureStore({
  reducer: {
    toDos: toDoReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
