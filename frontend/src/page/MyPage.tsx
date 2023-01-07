import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import NavBar from 'components/NavBar';
// MUI
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import profile from 'images/profile.png';
import pencil from 'images/pencil.png';
import Tag from 'components/Tag';

function MyPage() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
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
                  <Tab label="내가 작성한 질문" value="2" />
                  <Tab label="멘토 채팅방" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="relative flex flex-col w-full">
                  <div className="flex flex-col rounded-xl h-64 w-full bg-white border-4 border-violet-300">
                    {/* 질문 제목 텍스트로 가져와야함 */}
                    <div className="flex flex-col m-3 mb-4">
                      <span className="font-bold mb-3">학력</span>
                      <span>한국공학대학교</span>
                      <span>2020.03 ~ 2024.02</span>
                    </div>
                    <div className="m-3">
                      <span className="font-bold">주요 사용 언어</span>
                      <div className="flex flex-row">
                        <Tag text="Java" />
                        <Tag text="Spring" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
              <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
