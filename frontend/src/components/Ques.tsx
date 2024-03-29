import Tag from 'components/Tags/Tag';
import Date from 'components/Tags/Date';
import { useNavigate } from 'react-router-dom';

interface Props {
  count: number;
  title: string;
  date: string;
  type: string;
  postId: number;
  tags: string[];
  solved: boolean;
}

function Ques({ count, title, date, type, postId, tags, solved }: Props) {
  const navigate = useNavigate();
  const goToAnsPage = () => {
    if (type === 'QUESTION') {
      navigate('/anspage', { state: { id: postId } });
    } else if (solved === true) {
      navigate('/privateanscheckpage', { state: { id: postId } });
    } else {
      navigate('/privateanspage', { state: { id: postId } });
    }
  };

  return (
    <button type="button" onClick={goToAnsPage}>
      <div className="relative flex flex-row h-22 w-full bg-white border-2 border-gray rounded-lg">
        {/* 답변 수 */}
        <div className="h-14 w-14 my-4 ml-4 mr-2 rounded-lg bg-violet-100">
          <div className="flex justify-center item-center">
            {type === 'QUESTION' ? (
              <div className="flex-col m-0.5">
                <p className="m-0.5 mx-2 px-0.5 text-sm">{count}</p>
                <p className="m-0.5 text-sm">답변</p>
              </div>
            ) : (
              <div className="flex-col m-1.5">
                {solved === true ? (
                  <p className="m-0.5 text-sm">멘토링 완료</p>
                ) : (
                  <p className="m-0.5 text-sm">멘토링 예정</p>
                )}
              </div>
            )}
          </div>
        </div>
        {/* 질문 제목 */}
        <div className="flex flex-col mt-3 items-start">
          <span className="ml-5 sm:text-sm md:text-lg lg:text-xl">{title}</span>
          {/* 태그 */}
          <div className="flex flex-row ml-2">
            {tags.map((tag: any) => (
              <Tag key={Math.random() * 500} text={tag} />
            ))}
          </div>
        </div>
        {/* 날짜 */}
        <div className="absolute top-2 right-4">
          <Date date={date} />
        </div>
      </div>
    </button>
  );
}

export default Ques;
