import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';
import ColorSystem from 'utils/ColorSystem';
import NavBar from 'components/NavBar';
import Tag from 'components/Tag';
import TitleIndex from 'components/TitleIndex';
import ContentIndex from 'components/ContentIndex';
import AnswerIndex from 'components/AnswerIndex';
import Btn from 'components/Btn';
import Ans from 'components/Ans';

// 질문 답변 및 확인 페이지
function AnsPage() {
  return (
    // 배경색
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      {/* 상단바 */}
      <NavBar />
      {/* Title */}
      <div className="flex justify-center item-center my-8">
        <div className="relative flex flex-col-reverse w-3/5">
          <div className="flex flex-col rounded-xl h-32 w-full mx-1 my-2 bg-white border-4 border-violet-300">
            {/* 질문 제목 텍스트로 가져와야함 */}
            <span className="text-text-color text-xl m-4">질문 제목</span>
            <div className="flex flex-row relative">
              <Tag text="# JavaScript" />
              <Tag text="# python" />
              <div className="absolute top-0 right-3">
                <Tag text="2023-01-04" />
              </div>
            </div>
          </div>
          {/* title index */}
          <TitleIndex />
          <span className="pl-3 text-text-color text-2xl">TITLE</span>
        </div>
      </div>
      {/* Content */}
      <div className="flex justify-center item-center my-8">
        <div className="relative flex flex-col-reverse w-3/5">
          <div className="flex flex-col rounded-xl h-64 w-full mx-1 my-2 bg-white border-4 border-violet-300">
            <span className="text-text-color text-xl m-4">질문 내용</span>
          </div>
          {/* content index */}
          <ContentIndex />
          <span className="pl-3 text-text-color text-2xl">CONTENT</span>
        </div>
      </div>
      {/* Answer */}
      <div className="flex justify-center item-center my-8">
        <div className="relative flex flex-col-reverse w-3/5">
          <div className="flex flex-col rounded-xl h-14 w-full mx-1 my-2 bg-white border-4 border-violet-300">
            <div className="pr-8 w-full items-center">
              {/* 답변 작성 */}
              <div className="relative">
                <input
                  type="text"
                  className="absolute top-1 left-4 w-full h-10 rounded-lg focus:shadow focus:outline-none"
                  placeholder="Answer"
                />
                <div className="absolute top-2 right-0">
                  <Btn text="SUBMIT" />
                </div>
              </div>
            </div>
          </div>
          {/* answer index */}
          <AnswerIndex />
          <span className="pl-3 text-text-color text-2xl">ANSWER</span>
        </div>
      </div>
      {/* 답변 댓글들 */}
      <div className="flex justify-center item-center mt-8">
        <div className="flex flex-col w-3/5">
          <Ans person="사람1" ans="첫번째 답변입니다." date="2023-01-04" />
          <Ans person="사람2" ans="비공개 답변입니다." date="2023-01-05" />
        </div>
      </div>
      {/* 답변 댓글 끝 */}
    </div>
  );
}

export default AnsPage;
