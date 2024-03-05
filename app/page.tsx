import Nav from "@/components/Nav";

import { twJoin } from "tailwind-merge";
import Image from "next/image";
import { Nunito } from "next/font/google";
import { Lexend } from "next/font/google";
import CountDown from "@/components/CountDown";
import Prize from "@/components/Prize";

import DomainSelection from "@/components/DomainSelection";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Details from "@/components/Details";
import DownloadButton from "@/components/DownloadButton";
const lexend = Lexend({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });
export default function Home() {
  const targetDate = new Date("2024-12-31T23:59:59"); // Se
  return (
    <>
      <div className="bg w-full">
        <Nav />
        <div className="flex justify-center items-center flex-col mt-[50px] m-2 h-[32rem] ">
          <h5
            className={twJoin(
              nunito.className,
              "italic text-md font-extralight "
            )}
          >
            Innovision-2k24
          </h5>

          <h1 className="text-[90px] md:text-[108px] font-bold">Prakalp</h1>

          <p
            className={twJoin(
              lexend.className,
              "text-center text-lg/ md:text-lg tracking-wider font-extralight m-6 xl:mx-80"
            )}
          >
            JSPM’s Rajarshi Shahu College of Engineering, Tathawade presents
            project competition hosted by IT department. Showcase your problem
            solving skills and innovation in this exciting challenge!
          </p>

          <div
            className={twJoin(
              lexend.className,
              "m-12 w-full justify-center flex gap-12  font-[400] text-2xl tracking-wide"
            )}
          >
            <Button className="w-[150px] md:w-[200px] h-[50px] md:h-[60px] text-lg bg-red-700 hover:bg-red-900 text-white ">
              <Link href="https://forms.gle/TBR7P9uwkMjbAEAK8">
                {" "}
                Register Now
              </Link>
            </Button>
            <DownloadButton></DownloadButton>
          </div>
        </div>
        <div className="w-full ">
          <CountDown />
        </div>
        <Prize />
      </div>
      <div>
        <Details></Details>
        <DomainSelection></DomainSelection>
      </div>
    </>
  );
}
