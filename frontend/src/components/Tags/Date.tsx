interface Props {
  date: string;
}

function Date({ date }: Props) {
  return (
    <div className="flex justify-center items-center rounded-lg h-6 w-fit px-3 mx-2 my-2 bg-violet-200">
      <p className="text-text-color text-xs">{date}</p>
    </div>
  );
}

export default Date;
