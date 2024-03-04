import React from "react";
import { IoMdFastforward } from "react-icons/io";
import { twJoin } from "tailwind-merge";

import { Lexend } from "next/font/google";
const lexend = Lexend({
  subsets: ["latin"],
  weight: "300",
});
const boldLexend = Lexend({
  subsets: ["latin"],
  weight: "700",
});

const Details = () => {
  let boxes = [
    {
      heading: "Event Dates",
      content: "20th & 21st March",
    },
    {
      heading: "Registration deadline",
      content: "18 March",
    },
    {
      heading: "Team Members",
      content: "4 per Team",
    },
    {
      heading: "Event Fees",
      content: "Rs.100 /team",
    },
  ];
  return (
    <div
      className={twJoin(
        "border-[#604897] border-2 w-full tracking-wide",
        lexend.className
      )}
    >
      <div className="w-full bg-black text-white grid xl:grid-cols-2 gap-4 place-content-center md:min-h-[52rem]  py-4 px-8 lg:px-48">
        <div className=" flex flex-col justify-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex text-2xl gap-2 text-start items-center">
              <IoMdFastforward size={34} />
              Event Details
            </div>
            <div className={twJoin("text-6xl ", boldLexend.className)}>
              Things to{" "}
              <span className="bg-gradient-to-r from-[#D02626] to-[#3B2DE3] inline-block text-transparent bg-clip-text">
                Note!
              </span>
            </div>
          </div>
          <div className="bg-[#FD71AF] w-24 rounded-xl h-[5px] "></div>
          <p className="text-lg tracking-wider">
            There will be one round. Project will be judged based on the
            uniqueness and innovation in it. Refer rule book for more details.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 place-content-stretch gap-8 tracking-wider">
          {boxes?.map((ele, ind) => {
            return (
              <div
                key={ind}
                className="bg-gradient-to-tr from-[#760707] via-purple-500 to-[#7D15CE] p-[1.2px] rounded-sm"
              >
                <div className="w-full bg-black h-full flex flex-col gap-3 justify-center items-center rounded-sm text-center p-6 py-12">
                  <h2 className="">{ele?.heading}</h2>
                  <h4 className="text-xl font-semibold">{ele?.content}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;
