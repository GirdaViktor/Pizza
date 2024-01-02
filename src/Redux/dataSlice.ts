import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "./Store";

export const fetchDataItems = createAsyncThunk(
  'data/fetchDataStatus', async () => {
    const { data } =  await axios.get(`https://63ff64b6571200b7b7dcf348.mockapi.io/items`)
    return data;
  });

export interface IDataItem {
  category: number;
  id: string;
  imgUrl: string;
  price: number;
  rating: number;
  size: number[];
  title: string;
  types: number[];
  count?: number;
}

interface IDataSlice  {
  items: IDataItem[];
  status: string;
}

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

const initialState: IDataSlice = {
  items: [],
  status: 'loading',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state: IDataSlice, action: PayloadAction<IDataItem[]>)  {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataItems.pending, (state: IDataSlice) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchDataItems.fulfilled, (state: IDataSlice, action: PayloadAction<IDataItem[]>) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });

    builder.addCase(fetchDataItems.rejected, (state: IDataSlice) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const dataSelector = (state: RootState) => state.dataReducer;
export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
