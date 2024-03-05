import Image from "next/image";
import React from "react";

import { AnimatedTooltip } from "./ui/AnimatedToolTip";
import { Orbitron, Lexend } from "next/font/google";
import { twJoin } from "tailwind-merge";

const lexend = Lexend({
  subsets: ["latin"],
  weight: "300",
});
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "700",
});

const Footer = () => {
  const developers = [
    {
      id: 1,
      name: "Vineet Babar",
      designation: "UX Designer",
      image: "/Developers/Vineet.jpeg",
      url: "https://www.linkedin.com/in/vineet-babar-2b840923b/",
    },
    {
      id: 2,
      name: "Suyog Angaj",
      designation: "Full Stack Developer",
      image: "/Developers/Suyog.jpeg",
      url: "https://www.linkedin.com/in/suyog-angaj-917808202/",
    },
    {
      id: 3,
      name: "Sushant Rao",
      designation: "Full Stack Developer",
      image: "/Developers/Sushant.jpg",
      url: "https://www.linkedin.com/in/sushant-rao-351630249/",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-1 md:justify-evenly text-[#D3D3D3] bg-[#00000059] md:py-20 p-4 md:p-12">
      <div className="flex  justify-center md:justify-start items-center gap-3">
        <Image
          src={"/PrakalpLogo.png"}
          width={70}
          height={60}
          alt="logo"
        ></Image>
        <div>
          <h1
            className={twJoin(
              "text-3xl font-bold tracking-wider",
              orbitron.className
            )}
          >
            Prakalp
          </h1>
          <h5 className="text-sm text-[#C5C5C5]">Innovision 2024</h5>
        </div>
      </div>
      <div className={twJoin("flex flex-col gap-1", lexend.className)}>
        <h3 className="text-xl text-center md:text-left font-semibold">
          Event Co-Ordinators
        </h3>
        <div className="flex flex-col gap-[1px] text-[#C3C3C3] text-base">
          <h4>
            Shweta Darade :<span> +91 9359694588</span>
          </h4>
          <h4>
            Omkar Malve :<span> +91 7768876831</span>
          </h4>
        </div>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center">
        <div className="text-xl font-semibold">Website Creators</div>
        <div className="flex flex-row justify-center items-center gap-1 w-full">
          <AnimatedTooltip items={developers}></AnimatedTooltip>
        </div>
      </div>
    </div>
  );
};

export default Footer;
