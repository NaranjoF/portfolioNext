import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface linkColorValue {
  value: String;
}

const initialState: linkColorValue = {
  value: "#1f2937",
};

export const linkColorSlice = createSlice({
  name: "linkColor",
  initialState,
  reducers: {
    setlinkColorState: (state, action: PayloadAction<String>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setlinkColorState } = linkColorSlice.actions;

export default linkColorSlice.reducer;
