import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  searchValue: '',
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
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    }
  }
});

export const selectorFilter = state => state.filter;
export const { setCategoryId, setSort, setPageCount, setFilters, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
