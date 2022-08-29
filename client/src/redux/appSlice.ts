import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ISuperPower from "../../../API/ISuperPower";

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

export default appSlice.reducer;