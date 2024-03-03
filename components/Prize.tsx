import Image from "next/image";
import React from "react";
import { TiPinOutline } from "react-icons/ti";
import { Lexend } from "next/font/google";
import { twJoin } from "tailwind-merge";
const lexend = Lexend({ subsets: ["latin"] });
const Prize = () => {
  return (
    <div className={twJoin(lexend.className, "w-full mt-[180px]")}>
      <div className="md:ml-28">
        <Image
          src="/Opper.svg"
          alt="opportunity"
          width={180}
          height={44}
          className="w-28 md:w-36"
        ></Image>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="font-extralight lg:text-xl"> Prize pool worth 50,000/-</p>
          <h3 className="font-[700] text-5xl lg:text-7xl">Prizes for Winner's</h3>
        </div> 
        <div className="flex gap-20 mt-[80px] w-full justify-center items-center">
          <div className="flex flex-col justify-center items-center  ">
            <Image
              src="./medal.svg"
              alt="medal icon"
              width={100}
              height={100}
              className="lg:w-[180px]"
            ></Image>
            <p className="lg:text-xl">2nd Prize</p>
            <h4 className="xl lg:text-3xl">upto 10,000/-</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            {" "}
            <Image
              src="./Vector (3).svg"
              alt="medal icon"
              width={100}
              height={100}
              className="lg:w-[180px]"
            ></Image>
            <p className="lg:text-xl">1nd Prize</p>
            <h4  className="xl lg:text-3xl">upto 25,000/-</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="./medal.svg"
              alt="medal icon"
              width={100}
              height={100}
              className="lg:w-[180px]"
            ></Image>
            <p className="lg:text-xl">3rd Prize</p>
            <h4  className="xl lg:text-3xl">upto 5,000/-</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prize;
