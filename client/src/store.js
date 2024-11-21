import { configureStore } from "@reduxjs/toolkit";
import dressesReducer from "./slices/DressesSlice";
import favsReducer from "./slices/FavsSlice";

export default configureStore({
  reducer: {
    dresses: dressesReducer,
    favs: favsReducer,
  },
});
