import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ISuperPower from "../../../../API/ISuperPower";
import type { RootState } from '../store'

interface AppState {
  loading: boolean;
  superpowers: ISuperPower[];
};

const initialState: AppState = {
  loading: true,
  superpowers: new Array<ISuperPower>()
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSuperPowers: (state, action: PayloadAction<ISuperPower[]>) => {
      state.superpowers = action.payload;
    }
  }
});

export const { setLoading, setSuperPowers } = appSlice.actions;

export const isLoading = (state: RootState) => state.app.loading;

export default appSlice.reducer;