import { configureStore } from '@reduxjs/toolkit';

import dataSlice from "./dataSlice";

const store = configureStore({
  reducer: {
    dataReducer: dataSlice,
  },
});
export default store;
