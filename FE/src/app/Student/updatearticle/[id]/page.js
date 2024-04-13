
import NewArticle from "@/components/pages/NewArticle";
import UpdateArticle from "@/components/pages/UpdateArticle";
import Image from "next/image";

export default function page({params}) {
  return (
    <>
      <UpdateArticle id= {params.id}/>
    </>
  );
}
