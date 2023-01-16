import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import NavBar from 'components/NavBar';
import Button from 'components/LoginBtn';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

// axios.defaults.withCredentials = true;

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const navigate = useNavigate();
  // const goToMain = () => {
  //   navigate('/mainpage');
  // };
  const checkUser = () => {
    if (username === '' || password === '') {
      // eslint-disable-next-line no-alert
      alert('아이디와 비밀번호를 입력해주세요!');
    }
    // else{
    //   navigate("/afterlogin");
    // }
  };
  axios
    .post('/users/login', {
      username,
      password,
    })
    .then((response) => {
      // Handle success.
      console.log('로그인 완료!');
      console.log('유저 네임:', username);
      console.log('유저 세션', response.data.session);
      console.log('유저 프로필', response.data.user);
      console.log('유저 아이디', response.data.user.id);

      sessionStorage.setItem('username', username);
      sessionStorage.setItem('session', response.data.session.access);
      sessionStorage.setItem('user_id', response.data.user.id);
    })
    .catch((error) => {
      // Handle error.
      console.log('에러 발생!', error.response);
    });

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
