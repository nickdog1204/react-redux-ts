import reducers from "../reducers";
import {createStore} from "@reduxjs/toolkit";

export const store = createStore(reducers);
// export const store = configure

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>