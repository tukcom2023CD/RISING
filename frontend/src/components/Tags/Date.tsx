interface Props {
  date: string;
}

function Date({ date }: Props) {
  return (
    <div className="flex justify-center items-center rounded-lg w-fit px-3 mx-2 my-2 sm:h-2 md:h-4 lg:h-6  bg-violet-200">
      <p className="text-text-color sm:text-sm md:text-base lg:text-sm">{date}</p>
    </div>
  );
}

export default Date;
