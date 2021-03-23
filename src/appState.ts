import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// --------------------------------------------------- models
export interface AppState {
  globalCounterState: number;
}

// --------------------------------------------------- initial state
export const initialState: AppState = {
  globalCounterState: 0,
};

// --------------------------------------------------- slice
export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setGlobalCounterState: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        globalCounterState: action.payload,
      };
    },
  },
});

// --------------------------------------------------- actions
export const { setGlobalCounterState } = appStateSlice.actions;

// --------------------------------------------------- reducer
export default appStateSlice.reducer;
