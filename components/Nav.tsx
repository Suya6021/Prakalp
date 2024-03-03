import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-full h-20 flex justify-between backdrop-blur-sm sticky top-0">
      <div className="flex justify-center items-center ml-2">
        <Image
          src="/PrakalpLogo.png"
          alt="Prakalp Logo"
          width={80}
          height={80}
        ></Image>
        <div className="flex flex-col justify-center ">
          <h2 className="">Prakalp</h2>
          <p className="text-[8px]">Innovation Accomplished</p>
        </div>
      </div>
      <div className="m-6">
        <Link href='https://forms.gle/TBR7P9uwkMjbAEAK8'>
        <Button>Register Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
