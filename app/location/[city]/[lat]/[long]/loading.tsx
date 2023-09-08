import { SunIcon } from "@heroicons/react/20/solid";
import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className='bg-gradient-to-br from-[#394f68] to-[#18387e] min-h-screen flex flex-col items-center justify-center text-slate-500'>
      <SunIcon
        className='h-24 w-24 animate-bounce text-yellow-500'
        color='yellow'
      />
      <h1 className='text-6xl font-bold text-center mb-10 animate-pulse'>
        Loading City Weather Information
      </h1>
      <p className='text-xl font-bold text-center mb-10 animate-pulse'>
        Hold on, we are crunching the numbers and generating an AI summary of
        the weather in the selected city!
      </p>
    </div>
  );
};

export default Loading;
