import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const statuses = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: statuses.IDLE,
  },
  reducers: {
    setProduct(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setProduct,setStatus } = productSlice.actions;
export default productSlice.reducer;
export function fetchData() {
  return async function fetchDataThunk(dispatch, getState) {
    try {
      dispatch(setStatus(statuses.LOADING));
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProduct(data));
      dispatch(setStatus(statuses.IDLE));
    } catch (error) {
      dispatch(setStatus(statuses.ERROR));
    }
  };
}
