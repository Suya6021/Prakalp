import React from "react";
import { Lexend } from "next/font/google";
import { twJoin } from "tailwind-merge";
const lexend = Lexend({ subsets: ["latin"] });
interface numProp {
  num: string | number;
  unit: string;
  flip: boolean;
}

export const NumberBox = ({ num, unit, flip }: numProp) => {
  return (
    <div
      className={twJoin(
        lexend.className,
        "flex flex-col items-center mt-4 p-2 md:p-5 min-w-20  max-w-28 md:min-w-36 lg:min-w-52  bg-[#292929] m-1 rounded-lg border-2 border-b-0 bg-opacity-50"
      )}
    >
      <div className="flex flex-col justify-center items-center">
        <p className="text-md  font-semibold   md:text-2xl ">{unit}</p>
        <h2 className="text-3xl">{num}</h2>
      </div>
    </div>
  );
};
