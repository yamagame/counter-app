import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// --------------------------------------------------- models

export interface AppState {
  globalCounterState: number;
}

// --------------------------------------------------- initial state
export const initialState: AppState = {
  globalCounterState: 0,
};

// --------------------------------------------------- reducers
export const appStateSlice = createSlice({
  name: "appState",
  initialState: {
    globalCounterState: 0,
  },
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

export default appStateSlice.reducer;
