import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addFavv,
  deleteFav,
  getAllFavs,
  getOneFav,
} from "../services/FavsService";

export const fetchFavs = createAsyncThunk("favs/fetchFavs", async () => {
  const response = await getAllFavs();
  return response;
});
export const fetchFav = createAsyncThunk("favs/fetchFav", async (id) => {
  const response = await getOneFav(id);
  return response;
});
export const addFav = createAsyncThunk("favs/addFav", async (dress) => {
  const response = await addFavv(dress);
  return response;
});
export const removeFav = createAsyncThunk("favs/removeFav", async (id) => {
  const response = await deleteFav(id);
  return response;
});

const initialState = {
  data: [],
  selectedDress: null,
  isLoading: false,
  error: null,
};

const favsSlice = createSlice({
  name: "favs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFavs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchFavs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchFav.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFav.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedDress = action.payload;
      })
      .addCase(fetchFav.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addFav.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addFav.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload);
      })
      .addCase(addFav.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(removeFav.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeFav.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.filter(
          (dress) => dress._id !== action.payload._id
        );
      })

      .addCase(removeFav.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default favsSlice.reducer;
