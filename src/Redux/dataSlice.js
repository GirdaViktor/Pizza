import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataItems = createAsyncThunk(
  'data/fetchDataStatus', async () => {
    const { data } =  await axios.get(`https://63ff64b6571200b7b7dcf348.mockapi.io/items`)
    return data;
  });

const initialState = {
  items: [],
  status: 'loading',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action)  {
      state.items = action.payload;
      },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataItems.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    });

    builder.addCase(fetchDataItems.fulfilled, (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    });

    builder.addCase(fetchDataItems.rejected, (state) => {
      state.status = 'error';
      state.items = [];
    });
  },
});

export const dataSelector = (state) => state.dataReducer
export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
