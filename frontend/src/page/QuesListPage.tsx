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

function QuesListPage() {
  const [quesInfo, setQuesInfo] = useState([]);
  const [sumId, setSumId] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [option, setOption] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      await axios
        .get(`/api/v1/posts?page=0`)
        .then((res) => {
          setSumId(res.data.data[0].id);
          setPageCount(Math.ceil(sumId / 10));
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

  useEffect(() => {
    const fetchQuesInfo = async () => {
      try {
        let url = `/api/v1/posts?page=${page}&size=10`;

        if (option) {
          url += `&type=${option}`;
        }

        const res = await axios.get(url);
        setQuesInfo(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuesInfo();
  }, [option, page]);

  useEffect(() => {
    (async () => {
      await axios
        .get(`/api/v1/posts?page=1`)
        .then((res) => {
          setPageCount(Math.ceil(sumId / 10));
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, [sumId]);

  return (
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      <QuesListNavBar />
      <div className="flex justify-center my-8 pt-3">
        <div className="relative flex flex-col my-6 w-4/5 h-[33rem]">
          <div className="absolute flex flex-row -top-11 right-1 mx-1 p-1 h-10">
            <div className="mr-3">
              <KeyWordOptionSelect />
            </div>
            <OptionSelect setOption={setOption} />
          </div>
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
              page={page}
              count={pageCount}
              size="large"
              onChange={(e, value) => {
                e.preventDefault();
                setPage(value);
                setSearchParams((prevParams) => {
                  return { ...prevParams, page: value.toString(), option: option || undefined };
                });
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
