interface Props {
  ans: string;
  person: string;
  date: string;
}

function Ans({ ans, person, date }: Props) {
  return (
    <div className="relative flex flex-row h-14 items-center m-0.5 w-full border-2 border-gray rounded-lg">
      {/* 프로필 사진 */}
      <div className="h-9 w-9 m-2 rounded-lg bg-violet-100 hover:bg-violet-300" />
      {/* 답변자와 답변 */}
      <div className="flex flex-col">
        <span className="font-bold text-xs text-bold">{person}</span>
        <span className="text-xs">{ans}</span>
      </div>
      {/* 날짜 */}
      <div className="absolute top-3 right-3">{date}</div>
    </div>
  );
}

export default Ans;
