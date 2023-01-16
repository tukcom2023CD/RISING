import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import QuesListNavBar from 'components/NavBar/QuesListNavBar';
import Ques from 'components/Ques';
import KeyWordOptionSelect from 'components/Select/KeyWordOptionSelect';
import OptionSelect from 'components/Select/OptionSelect';
import { useEffect, useState } from 'react';
import axios from 'axios';

// 질문 리스트 페이지
function QuesListPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const offset = (page - 1) * limit;
  const [quesInfo, setQuesInfo] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get(`/posts?page=0`)
        .then((res) => {
          console.log(res.data.data);
          setQuesInfo(res.data.data);
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
      <QuesListNavBar />
      <div className="flex justify-center item-center my-8 pt-3">
        <div className="relative flex flex-col my-6 w-4/5 h-[33rem]">
          {/* 필터링 버튼 */}
          <div className="absolute flex flex-row -top-11 right-1 mx-1 p-1 h-10">
            {/* 필터 */}
            <div className="mr-2">
              <KeyWordOptionSelect />
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
                  {quesInfo.slice(offset, offset + limit).map((data: any) => (
                    <Ques
                      key={data.id}
                      count={2}
                      title={data.title}
                      type={data.type}
                      postId={data.id}
                      tags={data.tags}
                      date={data.created_at}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* <footer>
              <Pagination
                total={quesInfo.length}
                limit={limit}
                page={page}
                setPage={setPage}
              />
            </footer> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuesListPage;
