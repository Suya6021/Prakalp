import React from "react";
import { NumberBox } from "./NumberBox";
import { Lexend } from "next/font/google";
import { twJoin } from "tailwind-merge";
const lexend = Lexend({ subsets: ["latin"] });
interface timeProps {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

export const TimerContainer = ({
  days,
  hours,
  minutes,
  seconds,
}: timeProps) => {
  let daysFlip = false;
  let hoursFlip = false;
  let minutesFlip = false;
  let secondsFlip = true;

  if (
    Number(seconds) <= 0 &&
    Number(minutes) <= 0 &&
    Number(hours) <= 0 &&
    Number(days) <= 0
  ) {
    daysFlip = false;
    hoursFlip = false;
    minutesFlip = false;
    secondsFlip = false;
  }
  if (seconds == 0) {
    if (minutes != 0) {
      seconds = 59;
    }

    secondsFlip = false;
    minutesFlip = true;
  }
  if (minutes == 0) {
    if (hours != 0) {
      minutes = 59;
    }

    minutesFlip = false;
    hoursFlip = true;
  }

  if (hours == 0) {
    hoursFlip = false;
    if (days != 0) {
      daysFlip = true;
    }
  }

  if (Number(days) < 10) {
    days = "0" + days;
  }

  if (Number(hours) < 10) {
    hours = "0" + hours;
  }

  if (Number(minutes) < 10) {
    minutes = "0" + minutes;
  }

  if (Number(seconds) < 10) {
    seconds = "0" + seconds;
  }

  return (
    <div className="flex justify-center items-center mt-[110px] px-2 flex-col">
      <div
        className={twJoin(
          "w-full flex justify-center items-center text-xl md:text-2xl",
          lexend.className
        )}
      >
        <h2>
          Time’s{" "}
          <span
            className={twJoin(lexend.className, "italic text-xl font-semibold md:text-2xl/4")}
          >
            running
          </span>{" "}
          up for registration!
        </h2>
      </div>
      <div className="flex  py-2 w-full  md:items-center lg:max-w-[1100px] justify-center gap-1 md:gap-12  md:mt-2  rounded-xl  md:px-2 md:py-8 ">
        <NumberBox num={days} unit="Days" flip={daysFlip} />
        <NumberBox num={hours} unit="Hours" flip={hoursFlip} />

        <NumberBox num={minutes} unit="Minutes" flip={minutesFlip} />

        <NumberBox num={seconds} unit="Seconds" flip={secondsFlip} />
      </div>
    </div>
  );
};
