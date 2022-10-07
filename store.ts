import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import navbarReducer from "./slices/navbarSlice";
import navbarshadowReducer from "./slices/navbarShadowSlice";
import navbarBgReducer from "./slices/navbarBgSlice";
import linkColorReducer from "./slices/linkColorSlice";

const combinedReducer = combineReducers({
  navbar: navbarReducer,
  navbarShadow: navbarshadowReducer,
  navbarBg: navbarBgReducer,
  linkColor: linkColorReducer,
});

const reducer = (
  state: ReturnType<typeof combinedReducer | undefined | any>,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer,
  });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(makeStore, { debug: true });
