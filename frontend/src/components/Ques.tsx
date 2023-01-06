import Tag from 'components/Tag';

interface Props {
  count: number;
  title: string;
}

function Ques({ count, title }: Props) {
  return (
    <div className="relative flex flex-row h-22 items-center m-0.5 w-full bg-white border-2 border-gray rounded-lg">
      {/* 답변 수 */}
      <div className="h-14 w-14 m-4 rounded-lg bg-violet-100 hover:bg-violet-300">
        <div className="flex-col item-center">
          <p className="px-5 mx-0.5 py-0.5">{count}</p>
          <p className="px-3 mx-0.5">답변</p>
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
        <Tag text="2023-01-04" />
      </div>
    </div>
  );
}

export default Ques;
