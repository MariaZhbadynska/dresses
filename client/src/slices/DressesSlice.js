import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllDresses, getOneDress } from "../services/DressesService";

export const fetchDresses = createAsyncThunk(
  "dresses/fetchDresses",
  async () => {
    const response = await getAllDresses();
    return response;
  }
);
export const fetchDress = createAsyncThunk("dresses/fetchDress", async (id) => {
  const response = await getOneDress(id);
  return response;
});

const initialState = {
  data: [],
  selectedDress: null,
  isLoading: false,
  error: null,
};

const dressesSlice = createSlice({
  name: "dresses",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDresses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDresses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchDresses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchDress.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedDress = action.payload;
      })
      .addCase(fetchDress.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default dressesSlice.reducer;
