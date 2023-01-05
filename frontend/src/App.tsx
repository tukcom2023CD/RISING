import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignUpPage from 'page/SignUpPage';
import LoginPage from 'page/LoginPage';
import MyPage from 'page/MyPage';
import QuesListPage from 'page/QuesListPage';
import QuesPage from 'page/QuesPage';
import AnsPage from 'page/AnsPage';
import PrivateQuesPage from 'page/PrivateQuesPage';
import PrivateAnsPage from 'page/PrivateAnsPage';
import PrivateAnsCheckPage from 'page/PrivateAnsCheckPage';
import QuesChatPage from 'page/QuesChatPage';
import MainPage from './page/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/queslistpage" element={<QuesListPage />} />
        <Route path="/quespage" element={<QuesPage />} />
        <Route path="/anspage" element={<AnsPage />} />
        <Route path="/privatequespage" element={<PrivateQuesPage />} />
        <Route path="/privateanspage" element={<PrivateAnsPage />} />
        <Route path="/privateanscheckpage" element={<PrivateAnsCheckPage />} />
        <Route path="/queschatpage" element={<QuesChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;
