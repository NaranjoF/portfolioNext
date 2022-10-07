import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface shadowValue {
  value: Boolean;
}

const initialState: shadowValue = {
  value: false,
};

export const navbarShadowSlice = createSlice({
  name: "navbarShadow",
  initialState,
  reducers: {
    setnavbarShadowState: (state, action: PayloadAction<Boolean>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setnavbarShadowState } = navbarShadowSlice.actions;

export default navbarShadowSlice.reducer;
