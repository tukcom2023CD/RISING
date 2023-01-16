import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import NavBar from 'components/NavBar';
import Button from 'components/LoginBtn';
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BasicProfile from 'images/BasicProfile.png';
import axios from 'axios';

function SignUpPage() {
  // const navigate = useNavigate();
  // const goToLogin = () => {
  //   navigate('/login');
  // };

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const user = () => {
    axios
      .post('/users', {
        name,
        username,
        password,
      })
      .then((response) => {
        // Handle success.
        console.log('회원가입 완료!');
        console.log('유저 이름', response.data.name);
        console.log('유저 이메일', response.data.username);
        sessionStorage.setItem('유저 세션 아이디', response.data.session);
      })
      .catch((error) => {
        // Handle error.
        console.log('에러가 발생했어요!:', error.response);
      });
  };

  return (
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      {/* 상단바 */}
      <NavBar />
      {/* 회원가입 틀 */}
      <div className="mt-36 flex justify-center item-center my-8 h-[23rem]">
        <div className="w-3/5 flex flex-row bg-white drop-shadow-lg item-center pr-6">
          {/* 유저 기본 사진 */}
          <div className="m-6 mt-8">
            <img src={BasicProfile} alt="기본사진" />
          </div>
          {/* 유저 정보 기입 */}
          <div className="relative flex flex-col w-4/5">
            <div className="mt-8 rounded-xl h-12 w-full pr-2 mx-1 my-3 bg-white border-4 border-violet-300">
              <input
                className="h-9 m-1 w-full placeholder-[#9CA6C5]"
                placeholder="Nickname"
                type="name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
                required
              />
            </div>
            <div className="mt-2 rounded-xl h-12 w-full pr-2 mx-1 my-3 bg-white border-4 border-violet-300">
              <input
                className="h-9 m-1 w-full placeholder-[#9CA6C5]"
                placeholder="Email Address"
                type="username"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                required
              />
            </div>
            <div className="mt-2 rounded-xl h-12 w-full pr-2 mx-1 my-3 bg-white border-4 border-violet-300">
              <input
                className="h-9 m-1 w-full placeholder-[#9CA6C5]"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required
              />
            </div>
            <div className="mt-2 rounded-xl h-12 w-full pr-2 mx-1 my-3 bg-white border-4 border-violet-300">
              <input
                className="h-9 m-1 w-full placeholder-[#9CA6C5]"
                placeholder="Check Password"
                type="password"
                value={passwordConfirm}
                onChange={(event) => {
                  setPasswordConfirm(event.target.value);
                }}
                required
              />
            </div>
            <div className="mt-4 mb-2 grid absolute bottom-4 right-0">
              <Button text="다음" onClick={user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
