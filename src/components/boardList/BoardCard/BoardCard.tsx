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
        isList ? "w-full" : "w-[25rem]"
      } overflow-hidden flex flex-col gap-[1rem]`}
    >
      <Link href="https://velog.io/@ccamy0915/posts">
        <div
          className={`${
            isList ? "h-[40rem]" : "h-[25rem]"
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
        <p className="font-bold text-[2rem] mt-[1rem]">{title}</p>
      </Link>
      <HashTagList tagList={tags} />
      <p className="text-[1.2rem]">{desc}</p>
    </div>
  );
}
