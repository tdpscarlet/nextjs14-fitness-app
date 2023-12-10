import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitState {
  dayValue: string;
}

const initialState: InitState = {
  dayValue: "",
};

export const daySlice = createSlice({
  name: "exercisesList",
  initialState,
  reducers: {
    setDayValue: (state, action: PayloadAction<string>) => {
      state.dayValue = action.payload;
    },
  },
});

export const { setDayValue } = daySlice.actions;

export default daySlice.reducer;
