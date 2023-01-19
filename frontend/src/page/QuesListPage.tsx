import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import QuesListNavBar from 'components/NavBar/QuesListNavBar';
import Ques from 'components/Ques';
import KeyWordOptionSelect from 'components/Select/KeyWordOptionSelect';
import OptionSelect from 'components/Select/OptionSelect';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

// 질문 리스트 페이지
function QuesListPage() {
  const [quesInfo, setQuesInfo] = useState([]);
  const [sumId, setSumId] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      await axios
        .get(`http://${process.env.REACT_APP_HOST}/api/v1/posts?page=0`)
        .then((res) => {
          setSumId(res.data.data[0].id);
          setPageCount(Math.ceil(sumId / 10));
        })
        .catch((error) => {
          console.log(error);
        });
    })();
    const pageNumber = searchParams.get('page');
    (async () => {
      await axios
        .get(
          `http://${process.env.REACT_APP_HOST}/api/v1/posts?page=${pageNumber}`,
        )
        .then((res) => {
          setQuesInfo(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await axios
        .get(`http://${process.env.REACT_APP_HOST}/api/v1/posts?page=1`)
        .then((res) => {
          setPageCount(Math.ceil(sumId / 10));
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, [sumId]);

  return (
    // 배경색
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      {/* 상단바 */}
      <QuesListNavBar />
      <div className="flex justify-center my-8 pt-3">
        <div className="relative flex flex-col my-6 w-4/5 h-[33rem]">
          {/* 필터링 버튼 */}
          <div className="absolute flex flex-row -top-11 right-1 mx-1 p-1 h-10">
            {/* 필터 */}
            <div className="mr-3">
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
                  {quesInfo.map((data: any) => (
                    <Ques
                      key={Math.random() * 500}
                      count={data.commentCount}
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
          </div>
          <div className="m-2 flex justify-center item-center">
            <Pagination
              variant="outlined"
              color="primary"
              page={Number(searchParams.get('page'))}
              count={pageCount}
              size="large"
              onChange={(e, value) => {
                e.preventDefault(); // 새로고침 방지
                window.location.href = `/queslistpage?page=${value}`;
              }}
              showFirstButton
              showLastButton
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuesListPage;
