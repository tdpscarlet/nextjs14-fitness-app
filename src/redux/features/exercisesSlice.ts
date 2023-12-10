import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: InitState = {
  exercises: [],
  search: "",
  bodyPart: "all",
  selected: {},
};

const config = {
  headers: {
    "X-RapidAPI-Key": "aba5ebbb43msh492ff23b5162573p1dfe59jsnf1f5d5668110",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
const url = "https://exercisedb.p.rapidapi.com/exercises";

export const fetchAsyncExercises = createAsyncThunk(
  "exercisesList/fetchAsyncExercises",
  async () => {
    try {
      const response = await axios(url, config);
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchAsyncDetail = createAsyncThunk(
  "exercisesList/fetchAsyncDetail",
  async (id) => {
    const response = await axios
      .get(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, config)
      .catch((err) => err);
    // console.log(response.data);
    return response.data;
  }
);

export const exercisesSlice = createSlice({
  name: "exercisesList",
  initialState,
  reducers: {
    searchExercises: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    filterExercises: (state, action: PayloadAction<string>) => {
      state.bodyPart = action.payload;
    },
    removeSelectedExercise: (state) => {
      state.selected = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncExercises.pending, () => {
      console.log("Pending...");
    });
    builder.addCase(
      fetchAsyncExercises.fulfilled,
      (state, action: PayloadAction<Exercise[]>) => {
        console.log("Fetch exercises Successfully");
        return {
          ...state,
          exercises: action.payload,
        };
      }
    );
    builder.addCase(fetchAsyncDetail.pending, () => {
      console.log("Pending...");
    });
    builder.addCase(
      fetchAsyncDetail.fulfilled,
      (state, action: PayloadAction<Exercise>) => {
        console.log("Fetch exercise detail  Successfully");
        return {
          ...state,
          search: "",
          bodyPart: "all",
          selected: action.payload,
        };
      }
    );
  },
});

// export const searchSelector = (state) => state.exercisesList.search;
// export const bodyPartSelector = (state) => state.exercisesList.bodyPart;
// export const getAllExercises = (state) => state.exercisesList.exercises;
// export const getSelectedExercise = (state) => state.exercisesList.selected;
export const { removeSelectedExercise, searchExercises, filterExercises } =
  exercisesSlice.actions;

export default exercisesSlice.reducer;
