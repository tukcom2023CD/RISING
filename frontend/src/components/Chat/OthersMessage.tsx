// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function OthersMessage({ content }: any) {
  return (
    <div className="flex flex-col text-base mb-5 mx-3">
      <div className="flex flex-nowrap mt-1">
        <div className="bg-[#EDEDED] rounded-xl text-[#505050] whitespace-pre-wrap break-all p-2.5">
          {content}
        </div>
      </div>
    </div>
  );
}
