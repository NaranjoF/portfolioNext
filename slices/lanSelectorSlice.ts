import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface languageValue {
  value: Boolean;
}

const initialState: languageValue = {
  value: false,
};

export const lanSelectorSlice = createSlice({
  name: "lanSelector",
  initialState,
  reducers: {
    setlanSelectorState: (state, action: PayloadAction<Boolean>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setlanSelectorState } = lanSelectorSlice.actions;

export default lanSelectorSlice.reducer;
