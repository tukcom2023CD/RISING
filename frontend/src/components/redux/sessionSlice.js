import { createSlice } from '@reduxjs/toolkit';

const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    sessionId: '',
  },
  reducers: {
    setSessionId: (state, action) => {
      state.sessionId = action.payload;
    },
  },
});

export const { setSessionId } = sessionSlice.actions;
export default sessionSlice.reducer;