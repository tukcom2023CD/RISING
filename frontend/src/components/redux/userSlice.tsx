import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'userEmail',
  initialState: {
    userId: '',
  },
  reducers: {
    setUserEmail: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setUserEmail } = userSlice.actions;
export default userSlice.reducer;