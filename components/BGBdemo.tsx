import React from "react";
import { BackgroundBeams } from "../components/BgBeams";
import Details from "./Details";
export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <Details></Details>
      <BackgroundBeams />
    </div>
  );
}
