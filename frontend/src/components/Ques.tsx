import Tag from 'components/Tag';

interface Props {
  count: number;
  title: string;
  date: string;
}

function Ques({ count, title, date }: Props) {
  return (
    <div className="relative flex flex-row h-22 items-center w-full bg-white border-2 border-gray rounded-lg">
      {/* 답변 수 */}
      <div className="h-14 w-14 my-4 ml-4 mr-2 rounded-lg bg-violet-100">
        <div className="flex justify-center item-center">
          <div className="flex-col m-1">
            <p className="m-0.5 mx-2 px-0.5 text-sm">{count}</p>
            <p className="m-0.5 text-sm">답변</p>
          </div>
        </div>
      </div>
      {/* 질문 제목 */}
      <div className="relative flex flex-col">
        <span className="text-xl ml-4">{title}</span>
        {/* 태그 */}
        <div className="flex flex-row">
          <Tag text="# JavaScript" />
          <Tag text="# python" />
        </div>
      </div>
      {/* 날짜 */}
      <div className="absolute top-2 right-4">
        <Tag text={date} />
      </div>
    </div>
  );
}

export default Ques;
