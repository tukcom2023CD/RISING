import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import NavBar from 'components/NavBar/NavBar';
import Button from 'components/LoginBtn';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const checkUser = () => {
    if (username === '' || password === '') {
      // eslint-disable-next-line no-alert
      alert('아이디와 비밀번호를 입력해주세요!');
    }
    axios
      .post('/users/login', {
        username,
        password,
      })

      .then((response) => {
        // eslint-disable-next-line no-alert
        alert('로그인 성공!');
        console.log(response.data);
        console.log('유저 아이디 :', username);
        navigate('/');
        sessionStorage.setItem('username', username);
      })

      .catch((error) => {
        // eslint-disable-next-line no-alert
        alert('아이디와 비밀번호가 일치하지 않습니다!');
        console.log('에러 내용: ', error.response);
      });
  };

  return (
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      {/* 상단바 */}
      <NavBar />
      {/* 로그인 틀 */}
      <div className="mt-52 flex justify-center item-center my-8 h-64">
        <div className="w-2/5 bg-white drop-shadow-lg item-center px-4 pr-5">
          <div className="mt-8 flex flex-col rounded-xl h-14 w-full mx-1 my-3 bg-white border-4 border-violet-300">
            <input
              className="h-9 m-1 placeholder-[#9CA6C5]"
              placeholder="Email Address"
              type="email"
              value={username}
              required
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>
          <div className="mt-8 flex flex-col rounded-xl h-14 w-full mx-1 my-3 bg-white border-4 border-violet-300">
            <input
              className="h-9 m-1 placeholder-[#9CA6C5]"
              placeholder="Password"
              type="password"
              value={password}
              required
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="mt-6 grid place-items-center">
            <Button text="Login" onClick={checkUser} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
