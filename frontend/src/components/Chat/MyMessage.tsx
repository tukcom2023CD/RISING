// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MyMessage( {content} : any) {
  return (
    <div className="flex flex-col text-base mb-5">
      <div className="flex flex-nowrap justify-end mt-1">
        <div className="bg-[#9D9CD2] rounded-xl text-white whitespace-pre-wrap break-all p-2.5">{content}</div>
      </div>
    </div>
  );
} 