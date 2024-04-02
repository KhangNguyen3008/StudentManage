
import DetailMM from "@/components/pages/DetailMM";
import Image from "next/image";

export default function page({params}) {
  return (
    <>
      <DetailMM id={params.id}/>
    </>
  );
}
