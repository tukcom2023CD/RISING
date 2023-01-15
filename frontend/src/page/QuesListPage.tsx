import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import QuesNavBar from 'components/QuesNavBar';
import Ques from 'components/Ques';
import LanguageSelect from 'components/Select/LanguageSelect';
import FrameWorkSelect from 'components/Select/FrameWorkSelect';
import OptionSelect from 'components/Select/OptionSelect';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Info {
  title: string;
}

// 질문 리스트 페이지
function QuesListPage() {
  const [postId, setPostId] = useState(0);
  const [title, setTitle] = useState('');
  const [type, setType] = useState(null);

  const DUMMY_QUES_INFO: Info[] = [
    {
      title: '예시 질문입니다.',
    },
  ];

  const [quesInfo, setQuesInfo] = useState();

  useEffect(() => {
    (async () => {
      await axios
        .get(`http://localhost:8080/api/v1/posts?page=0`)
        .then((res) => {
          console.log(res.data.data);
          setQuesInfo(res.data.data);
          console.log(res.data.data[0]);
          setPostId(res.data.data[0].id);
          setTitle(res.data.data[0].title);
          setType(res.data.data[0].type);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

  return (
    // 배경색
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      {/* 상단바 */}
      <QuesNavBar />
      <div className="flex justify-center item-center my-8 pt-3">
        <div className="relative flex flex-col my-6 w-4/5 h-[33rem]">
          {/* 필터링 버튼 */}
          <div className="absolute flex flex-row -top-11 right-1 mx-1 p-1 h-10">
            {/* 필터 */}
            <div className="mr-2">
              <LanguageSelect />
            </div>
            <div className="mr-2">
              <FrameWorkSelect />
            </div>
            <OptionSelect />
          </div>
          {/* 질문 리스트 */}
          <div className="my-4 w-full h-[35rem]">
            <div
              className="w-full h-[32rem] scrollbar-thin 
            scrollbar-thumb-scroll-bar scrollbar-track-slate-100
            scrollbar-thumb-rounded-full scrollbar-track-rounded-full
            overflow-y-scroll"
            >
              <div className="h-64">
                <div className="flex flex-col p-1">
                  {/* {quesInfo.map((title: string) => {
                  })} */}
                  <Ques count={2} title={title} date="2023-01-04" />
                  {/* <Ques count={1} title="질문 제목2" date="2023-01-05" />
                  <Ques count={4} title="질문 제목3" date="2023-01-06" />
                  <Ques count={3} title="질문 제목4" date="2023-01-07" />
                  <Ques count={6} title="질문 제목5" date="2023-01-08" />
                  <Ques count={2} title="질문 제목6" date="2023-01-08" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuesListPage;
