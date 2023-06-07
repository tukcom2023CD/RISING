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

interface QuesData {
  id: number;
  commentCount: number;
  title: string;
  type: string;
  tags: string[];
  created_at: string;
}

function QuesListPage() {
  const [quesInfo, setQuesInfo] = useState<QuesData[]>([]);
  const [filteredQuesInfo, setFilteredQuesInfo] = useState<QuesData[]>([]);
  const [sumId, setSumId] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(1);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`/api/v1/posts?page=0`);
        setSumId(res.data.data[0].id);
        setPageCount(Math.ceil(res.data.data[0].id / 10));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    const pageNumber = searchParams.get('page');
    (async () => {
      try {
        const res = await axios.get(`/api/v1/posts?page=${pageNumber}`);
        setQuesInfo(res.data.data);

        // 필터링된 데이터를 업데이트합니다.
        const selectedOption = searchParams.get('option');
        let filteredData = [];

        if (selectedOption === 'QUESTION') {
          filteredData = res.data.data.filter((data: { type: string; }) => data.type === 'QUESTION');
        } else if (selectedOption === 'MENTORING') {
          filteredData = res.data.data.filter((data: { type: string; }) => data.type === 'MENTORING');
        } else {
          filteredData = res.data.data;
        }

        setFilteredQuesInfo(filteredData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [searchParams]);

  useEffect(() => {
    const selectedOption = searchParams.get('option');
    let filteredData = [];

    if (selectedOption === 'QUESTION') {
      filteredData = quesInfo.filter((data) => data.type === 'QUESTION');
    } else if (selectedOption === 'MENTORING') {
      filteredData = quesInfo.filter((data) => data.type === 'MENTORING');
    } else {
      filteredData = quesInfo;
    }

    setFilteredQuesInfo(filteredData);
  }, [quesInfo, searchParams]);

  return (
    <div className="h-screen" style={{ backgroundColor: ColorSystem.MainColor.Primary }}>
      {/* 상단바 */}
      <QuesListNavBar />
      <div className="flex justify-center my-8 pt-3">
        <div className="relative flex flex-col my-6 w-4/5 h-[33rem]">
          {/* 필터 */}
          <div className="absolute flex flex-row -top-11 right-1 mx-1 p-1 h-10">
            <div className="mr-3">
              <KeyWordOptionSelect />
            </div>
            <OptionSelect />
          </div>
          {/* 질문 리스트 */}
          <div className="my-4 w-full h-[35rem]">
            <div className="w-full h-[32rem] scrollbar-thin 
            scrollbar-thumb-scroll-bar scrollbar-track-slate-100
            scrollbar-thumb-rounded-full scrollbar-track-rounded-full
            overflow-y-scroll">
              <div className="h-64">
                <div className="flex flex-col p-1">
                  {filteredQuesInfo.map((data) => (
                    <Ques
                      key={data.id}
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
                e.preventDefault();
                window.location.href = `/queslistpage?page=${value}&option=${searchParams.get(
                  'option'
                )}`;
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
