import { configureStore } from "@reduxjs/toolkit";
import ExercisesReducer from "./features/exercisesSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import DayReducer from "./features/daySlice";

export const store = configureStore({
  reducer: {
    exercisesList: ExercisesReducer,
    DayReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
