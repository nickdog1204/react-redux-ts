import {configureStore} from "@reduxjs/toolkit";
import reducer from './reducers';
import actions from './actions';
import selectors from './selectors';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


export const store = configureStore({reducer});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const hooks = {
    useAppDispatch,
    useAppSelector
}

export {actions, selectors, hooks};
