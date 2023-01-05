import 'tailwindcss/tailwind.css';
import 'utils/pageStyle.css';

import ColorSystem from 'utils/ColorSystem';
import NavBar from 'components/NavBar';
import Tag from 'components/Tag';

interface Props {
  text: Text;
}

// 질문 답변 및 확인 페이지
function AnsPage() {
  return (
    <div
      className="h-screen"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      <NavBar />
      {/* Title */}
      <div className="grid place-items-center">
        <p className="text-text-color text-2xl">Title</p>
        <div className="flex flex-col rounded-xl h-32 w-4/5 mx-1 my-2 border-4 border-violet-300">
          {/* 질문 제목 텍스트로 가져와야함 */}
          <span className="text-xl m-4">질문제목</span>
          <div className="flex flex-row">
            <Tag text="#JavaScript" />
            <Tag text="#python" />
          </div>
        </div>
      </div>
      {/* Title 끝 */}
    </div>
  );
}

export default AnsPage;
