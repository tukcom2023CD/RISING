import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import MypageNavBar from 'components/NavBar/MypageNavBar';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BasicProfile from 'images/BasicProfile.png';
import pencil from 'images/pencil.png';
import ChatBox from 'components/ChatBox';
import Profile from 'components/Profile';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Ques from 'components/Ques';
import { setUserName } from '../components/redux/userSlice';

function MyPage() {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [menteeChatInfo, setMenteeChatInfo] = useState([]);
  const [mentorCharInfo, setMentorChatInfo] = useState([]);
  const [profileInfo, setProfileInfo] = useState('');
  const [userId, setUserId] = useState(0);
  const [userPostInfo, setUserPostInfo] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await axios
        .get(`/api/v1/chatrooms/mentee`)
        .then((res) => {
          console.log(res.data.data);
          setMenteeChatInfo(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await axios
        .get(`/api/v1/chatrooms/mentor`)
        .then((res) => {
          console.log(res.data.data);
          setMentorChatInfo(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await axios
        .get(`/api/v1/users/info`)
        .then((res) => {
          setProfileInfo(res.data.data.name);
          setUserId(res.data.data.userId);
          dispatch(setUserName(res.data.data.name));
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await axios
        .get(`/api/v1/posts/mypages/${userId}`)
        .then((res) => {
          console.log(res.data.data);
          setUserPostInfo(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, [userId]);

  return (
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      {/* 상단바 */}
      <MypageNavBar />
      {/* 유저 이름과 프로필 사진 */}
      <div className="flex justify-center item-center my-8">
        <div className="m-2">
          <img
            className="w-44 h-44 rounded-xl m-2"
            src={BasicProfile}
            alt="basicprofile"
          />
          <div className="flex flex-row justify-center item-center">
            <Profile name={profileInfo} />
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
                  <Tab label="내 질문 채팅방" value="1" />
                  <Tab label="멘토 채팅방" value="2" />
                  <Tab label="내 질문" value="3" />
                </TabList>
              </Box>
              {/* 내가 작성한 질문 */}
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
                        {userPostInfo.map((data: any) => (
                          <Ques
                            key={Math.random() * 500}
                            count={data.commentCount}
                            title={data.title}
                            type={data.type}
                            postId={data.id}
                            tags={data.tags}
                            date={data.created_at}
                            solved={data.solved}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              {/* 멘토 채팅방 */}
              <TabPanel value="1">
                <div className="w-full h-[32rem]">
                  <div
                    className="w-full h-[28rem] scrollbar-thin 
                    scrollbar-thumb-scroll-bar scrollbar-track-slate-100
                    scrollbar-thumb-rounded-full scrollbar-track-rounded-full
                    overflow-y-scroll"
                  >
                    <div className="h-64">
                      <div className="flex flex-col p-1">
                        {menteeChatInfo.map((data: any) => (
                          <ChatBox
                            key={Math.random() * 500}
                            mentor={data.mentor.name}
                            postId={data.post.postId}
                            roomId={data.roomId}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
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
                        {mentorCharInfo.map((data: any) => (
                          <ChatBox
                            key={Math.random() * 500}
                            mentor={data.mentor.name}
                            postId={data.post.postId}
                            roomId={data.roomId}
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
