import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface navbarBgValue {
  value: String;
}

const initialState: navbarBgValue = {
  value: "#ecf0f3",
};

export const navbarBgSlice = createSlice({
  name: "navbarBg",
  initialState,
  reducers: {
    setnavbarBgState: (state, action: PayloadAction<String>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setnavbarBgState } = navbarBgSlice.actions;

export default navbarBgSlice.reducer;
