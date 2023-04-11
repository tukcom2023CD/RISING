import { useNavigate } from 'react-router-dom';

interface Props {
  // chat: string;
  mentor: string;
  postId: number;
  roomId: number;
  // count: number;
}

function ChatBox({ mentor, postId, roomId }: Props) {
  localStorage.setItem('roomId', `${roomId}`);
  localStorage.setItem('sender', `${mentor}`);

  const navigate = useNavigate();
  const goToChat = () => {
    navigate('/queschatpage', { state: { id: postId } });
  };
  return (
    <button type="button" onClick={goToChat}>
      <div className="relative flex flex-row h-14 items-center m-0.5 w-full border-2 border-gray rounded-lg">
        {/* 프로필 사진 */}
        <div className="h-9 w-9 m-2 rounded-lg bg-violet-100" />
        {/* 상대방이름과 채팅 내용 */}
        <div className="flex flex-col">
          <span className="font-bold text-xs mb-3">{mentor}</span>
          {/* <span className="text-xs">{chat}</span> */}
        </div>
        {/* 채팅 수 */}
        {/* <div className="absolute right-3 w-6 h-4 rounded-full bg-[#54547D]">
          <span className="absolute -top-1 right-2 pt-0.5 text-white text-sm">
            {count}
          </span>
        </div> */}
      </div>
    </button>
  );
}

export default ChatBox;
