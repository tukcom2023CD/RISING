interface Props {
  text: string;
}

function Btn({ text }: Props) {
  return (
    <button
      type="button"
      className="h-8 w-20 rounded-lg bg-violet-200 hover:bg-violet-300"
    >
      <p className="text-text-color text-xs">{text}</p>
    </button>
  );
}

export default Btn;
