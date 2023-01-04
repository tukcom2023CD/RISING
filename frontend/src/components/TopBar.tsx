import ColorSystem from 'utils/ColorSystem';
import rogo from 'images/rogo.png';

function TopBar() {
  return (
    <div
      className="w-full h-30 border-b-2"
      style={{ backgroundColor: ColorSystem.MainColor.Primary }}
    >
      <div className="flex">
        <img className="left-0 w-48 pl-12 pr-8 py-8" src={rogo} alt="rogo" />
        <span className="text-xl  pl-10 pr-8 py-8 my-2">멘토구하기</span>
        <span className="text-xl  pl-10 pr-8 py-8 my-2">멘토링 구경하기</span>
        <span className="text-xl  pl-10 pr-8 py-8 my-2">질문게시판</span>
        <span className="text-xl  pl-10 pr-8 py-8 my-2">커뮤니티</span>
        <div className="absolute top-0 right-0 mr-28">
          <button
            type="button"
            className="rounded-3xl border-none h-10 w-20 mx-1 my-8"
            style={{ backgroundColor: ColorSystem.MainColor.quartic }}
          >
            로그인
          </button>
          <button
            type="button"
            className="rounded-3xl border-none h-10 w-20 mx-1 my-8"
            style={{ backgroundColor: ColorSystem.MainColor.tertiary }}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
