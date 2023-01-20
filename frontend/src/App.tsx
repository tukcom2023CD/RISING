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
import MentoringPage from 'page/MentoringPage';
import AfterMainPage from 'page/AfterMainPage';
import BeforeMainPage from 'page/BeforeMainPage';
import MainPage2 from 'page/MainPage2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage2 />} />
        <Route path="/mainpage" element={<BeforeMainPage />} />
        <Route path="/mainpage2" element={<AfterMainPage />} />
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
        <Route path="/mentoringpage" element={<MentoringPage />} />
      </Routes>
    </Router>
  );
}

export default App;
