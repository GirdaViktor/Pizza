import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataItems = createAsyncThunk(
  'data/fetchDataStatus', async (params) => {
    const {currentPage, categoryUrl, sortItem} = params;
    const {data} = await axios.get(`https://63ff64b6571200b7b7dcf348.mockapi.io/items?page=${currentPage}&limit=8&${categoryUrl}&sortBy=${sortItem.sort}`)
    return data;
  });

const initialState = {
  items: [],
  status: 'loading'
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action)  {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchDataItems.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchDataItems.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    },
    [fetchDataItems.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    }
  }
});

export const selectorData = state => state.data;
export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
