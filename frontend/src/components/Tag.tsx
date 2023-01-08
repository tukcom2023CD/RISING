interface Props {
  text: string;
}

function Tag({ text }: Props) {
  return (
    <div className="flex justify-center items-center rounded-lg h-6 w-fit px-3 ml-4 my-2 bg-violet-200">
      <p className="text-text-color text-xs">{text}</p>
    </div>
  );
}

export default Tag;
