interface Props {
  ans: string;
  person: number;
  date: string;
  time: string;
}

function Ans({ ans, person, date, time }: Props) {
  return (
      <div className="relative flex flex-row items-center p-2 mb-2 rounded-lg border-2 border-gray">
      {/* 프로필 사진 */}
      <div className="h-9 w-9 mr-2 rounded-full bg-violet-100" />
      {/* 답변자와 답변 */}
      <div className="flex flex-col flex-grow">
        <span className="font-bold text-xs ">{person}</span>
        <span className="text-xs">{ans}</span>
      </div>
      {/* 날짜 */}
      <div className="ml-2 text-xs whitespace-nowrap">
        {date} {time}
      </div>
    </div>
  );
}

export default Ans;