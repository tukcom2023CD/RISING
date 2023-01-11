import React from 'react';

export default function OthersMessage({content} : any) {
  return (
    <div className="flex flex-col text-base mb-5">
      <div className="flex flex-nowrap mt-1">
        <div className="bg-[#EDEDED] rounded-xl text-[#505050] whitespace-pre-wrap break-all p-2.5">{content}</div>
      </div>
    </div>
  );
}