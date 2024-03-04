import React from "react";
import { TypewriterEffect, TypewriterEffectSmooth } from "./ui/typewriter";
import { Lexend } from "next/font/google";
import { twJoin } from "tailwind-merge";
import Image from "next/image";
const lexend = Lexend({
  subsets: ["latin"],
  weight: "300",
});

const boldLexend = Lexend({
  subsets: ["latin"],
  weight: "700",
});

const DomainSelection = () => {
  let domains = [
    {
      img: "/AIML.png",
      name: "AI/ML",
    },
    {
      img: "/BIGDATA.png",
      name: "Big Data",
    },
    {
      img: "/WEBDEV.png",
      name: "Web Dev",
    },
    {
      img: "/ARVR.png",
      name: "AR-VR",
    },
    {
      img: "/IOT.png",
      name: "IOT",
    },
    {
      img: "/CS.png",
      name: "Cybersecurity",
    },
    {
      img: "/OTHERS.png",
      name: "Others",
    },
  ];
  return (
    <div
      className={twJoin(
        "w-full tracking-wider flex flex-col pt-12 md:pt-48 gap-12 p-12  md:min-h-[50rem] lg:px-52",
        lexend.className
      )}
    >
      <div className="flex flex-col gap-4">
        <h4 className="text-xl md:text-2xl text-[#E2E2E2]">Domain Selection</h4>
        <div className="hidden md:block ">
          <TypewriterEffectSmooth
            words={[
              {
                text: "Which domains can we choose?",
                className:
                  "text-[#E2E2E2] font-bolder md:text-4xl lg:text-5xl " +
                  boldLexend.className,
              },
            ]}
          ></TypewriterEffectSmooth>
        </div>
        <h1
          className={twJoin(
            boldLexend.className,
            "text-3xl block md:hidden text-white"
          )}
        >
          Which domains can we choose?
        </h1>
      </div>
      <div className="flex flex-wrap gap-5 justify-evenly">
        {domains?.map((elem, ind) => {
          return (
            <div
              key={ind}
              style={{
                transition: "all 0.1s ease-in",
              }}
              className="hover:scale-110 animate-in text-white flex flex-col  gap-4"
            >
              <Image
                src={elem?.img}
                alt={elem?.name}
                width={130}
                height={130}
              ></Image>
              <p className="text-center ">{elem?.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DomainSelection;
