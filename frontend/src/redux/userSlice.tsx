import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'userEmail',
  initialState: {
    userEmail: '',
  },
  reducers: {
    setUserEmail: (state, action) => {
      state.userEmail = action.payload; // username 
    }, 
  },
});
// 닉네임 구현해야함
export const { setUserEmail } = userSlice.actions;
export default userSlice.reducer;