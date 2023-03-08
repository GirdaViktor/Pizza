import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  pageCount: 1,
  sort: {
    name: 'популярности',
    sort: 'rating'
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action)  {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
    setFilters(state, action) {
      state.currentPage = action.payload.currentPage;
      state.sort.sort = action.payload.sortItem;
      state.categoryId = action.payload.categoryItem;

    }
  }
});

export const { setCategoryId, setSort, setPageCount, setFilters } = filterSlice.actions;
export default filterSlice.reducer;
