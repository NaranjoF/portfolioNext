import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface navbarValue {
  value: Boolean;
}

const initialState: navbarValue = {
  value: false,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setnavbarState: (state, action: PayloadAction<Boolean>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setnavbarState } = navbarSlice.actions;

export default navbarSlice.reducer;
