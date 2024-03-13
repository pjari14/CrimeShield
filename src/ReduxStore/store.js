import { configureStore } from "@reduxjs/toolkit";
import Userslice from "./Userslice/Userslice";

const store = configureStore({
  reducer: {
    user: Userslice,
  },
});

export default store;
