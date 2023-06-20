import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userEmail: '',
    userName: '',
    userId: '',
  },
  reducers: {
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setUserEmail, setUserName, setUserId } = userSlice.actions;
export default userSlice.reducer;
