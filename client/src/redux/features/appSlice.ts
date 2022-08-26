import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../store'

interface AppState {
  loading: boolean
};

const initialState: AppState = {
  loading: false
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  }
});

export const { setLoading } = appSlice.actions;

export const isLoading = (state: RootState) => state.app.loading;

export default appSlice.reducer;