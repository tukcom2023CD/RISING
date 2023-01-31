interface Props {
  text: string;
}

function Tag({ text }: Props) {
  return (
    <div className="flex justify-center items-center rounded-lg sm:h-2 md:h-4 lg:h-6 w-fit px-3 mx-2 my-2 bg-violet-200">
      <p className="text-text-color sm:text-sm md:text-base lg:text-xs"># {text}</p>
    </div>
  );
}

export default Tag;
