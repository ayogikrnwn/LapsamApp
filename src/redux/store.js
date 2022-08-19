import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import user from "./reducerUser";
export default configureStore({
  reducer: { data: reducers, user: user },
});
