import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useCookies } from 'react-cookie';

interface SessionState {
  sessionId: string;
}

const initialState: SessionState = {
  sessionId: '',
};

const sessionSlice = createSlice({
  name: 'sessionId',
  initialState,
  reducers: {
    setSessionId: (state, action: PayloadAction<string>) => {
      state.sessionId = action.payload;
    },
  },
});

export const { setSessionId } = sessionSlice.actions;

// 세션 ID 값을 반환하는 셀렉터
export const selectSessionId = (state: { session: SessionState }) => state.session.sessionId;

// 쿠키에서 SESSION 쿠키 값을 추출하여 반환하는 함수
export function getSessionId(): string {
  const [cookies] = useCookies(['SESSION']);
  return cookies.SESSION || '';
}

export default sessionSlice.reducer;