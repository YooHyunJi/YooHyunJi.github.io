import HashTagList from "@/components/common/HashTagList/HashTagList";
import Image from "next/image";
import Link from "next/link";

interface IPropsType {
  post: {
    id: string;
    thumbnail: string;
    title: string;
    tags: string[];
    desc: string;
  };
  isList: boolean;
}

export default function BoardCard({ post, isList }: IPropsType) {
  const { id, thumbnail, title, tags, desc } = post;
  return (
    <div
      className={`${
        isList ? "w-full" : "w-[10rem]"
      } overflow-hidden flex flex-col gap-[1rem]`}
    >
      <Link href="https://velog.io/@ccamy0915/posts">
        <div
          className={`${
            isList ? "h-[15rem]" : "h-[10rem]"
          } w-full content-center`}
        >
          <Image
            src={thumbnail}
            alt={`thumbnail of ${title}`}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <p
          className={`${
            isList ? "text-[1.5rem]" : "text-[1rem]"
          } font-bold mt-[1rem]`}
        >
          {title}
        </p>
      </Link>
      {isList ? <HashTagList tagList={tags} /> : <></>}
      <p
        className={`${isList ? "text-[1rem]" : "text-[0.8rem]"} text-overflow`}
      >
        {desc}
      </p>
    </div>
  );
}
