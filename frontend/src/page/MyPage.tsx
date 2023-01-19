import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import NavBar from 'components/NavBar/NavBar';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import profile from 'images/profile.png';
import pencil from 'images/pencil.png';
import Tag from 'components/Tags/Tag';
import ChatBox from 'components/ChatBox';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MyPage() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [chatInfo, setChatInfo] = useState([]);
  const [mentor, setMentor] = useState('');

  window.localStorage.setItem('partner', `${mentor}`);
  localStorage.setItem('sender', '멘토');

  useEffect(() => {
    (async () => {
      await axios
        .get('/chatrooms/mentee')
        .then((res) => {
          console.log(res.data.data);
          console.log(res.data.data[0].mentor.name);
          setChatInfo(res.data.data);
          setMentor(res.data.data[0].mentor.name);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

  return (
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      {/* 상단바 */}
      <NavBar />
      {/* 유저 이름과 프로필 사진 */}
      <div className="flex justify-center item-center my-8">
        <div className="m-2">
          <img
            className="w-44 h-44 rounded-xl m-2"
            src={profile}
            alt="profile"
          />
          <div className="flex flex-row justify-center item-center">
            <span className="text-lg mr-2">코린이</span>
            <img className="w-6 h-5 mt-1" src={pencil} alt="change" />
          </div>
        </div>
        {/* tap - mul 사용 */}
        <div className="w-3/5 m-2">
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  textColor="secondary"
                  indicatorColor="secondary"
                >
                  <Tab label="유저 정보" value="1" />
                  <Tab label="내 질문" value="2" />
                  <Tab label="내 채팅방" value="3" />
                </TabList>
              </Box>
              {/* 유저정보 */}
              <TabPanel value="1">
                <div className="relative flex flex-col w-full">
                  <div className="flex flex-col rounded-xl h-64 w-full bg-white border-4 border-violet-300">
                    {/* 질문 제목 텍스트로 가져와야함 */}
                    <div className="flex flex-col m-3 mb-4">
                      <span className="font-bold mb-3">학력</span>
                      <span>한국공학대학교</span>
                      <span>2020.03 ~ 2024.02</span>
                    </div>
                    <div className="mx-3 mt-3">
                      <span className="font-bold">주요 사용 언어</span>
                    </div>
                    <div className="flex flex-row ml-1 mt-1">
                      <Tag text="Java" />
                      <Tag text="Spring" />
                    </div>
                  </div>
                </div>
              </TabPanel>
              {/* 내가 작성한 질문 -> api 받으면 수정할 예정 */}
              <TabPanel value="2">
                <div className="w-full h-[32rem]">
                  <div
                    className="w-full h-[28rem] scrollbar-thin 
                    scrollbar-thumb-scroll-bar scrollbar-track-slate-100
                    scrollbar-thumb-rounded-full scrollbar-track-rounded-full
                    overflow-y-scroll"
                  >
                    <div className="h-64">
                      <div className="flex flex-col p-1">
                        추후 업데이트 될 예정입니다.
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              {/* 멘토 채팅방 */}
              <TabPanel value="3">
                <div className="w-full h-[32rem]">
                  <div
                    className="w-full h-[28rem] scrollbar-thin 
                    scrollbar-thumb-scroll-bar scrollbar-track-slate-100
                    scrollbar-thumb-rounded-full scrollbar-track-rounded-full
                    overflow-y-scroll"
                  >
                    <div className="h-64">
                      <div className="flex flex-col p-1">
                        {chatInfo.map((data: any) => (
                          <ChatBox
                            key={Math.random() * 500}
                            person={data.mentor.name}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
