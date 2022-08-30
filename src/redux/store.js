import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import user from "./reducerUser";
const configure = configureStore({
  reducer: { data: reducers, user: user },
});

export default configure;
