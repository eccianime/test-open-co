import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  isLoading: boolean;
}

const INITIAL_STATE: AppState = {
  isLoading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = appSlice.actions;
export default appSlice.reducer;
