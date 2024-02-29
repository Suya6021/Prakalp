import Details from "@/components/Details";
import DomainSelection from "@/components/DomainSelection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg w-[1512px] "></div>
      <Details></Details>
      <DomainSelection></DomainSelection>
    </>
  );
}
