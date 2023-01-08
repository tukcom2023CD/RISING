interface Props {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Btn({ text, onClick }: Props) {
  return (
    <button
      type="button"
      className="h-8 w-20 rounded-lg bg-violet-200 hover:bg-violet-300"
      onClick={onClick}
    >
      <span className="text-white text-xs">{text}</span>
    </button>
  );
}

export default Btn;
