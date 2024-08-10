"use client";

import { useState } from "react";
import { ListBulletIcon, Squares2X2Icon } from "@/../@heroicons/react/20/solid";
import BoardCard from "../BoardCard/BoardCard";
import TextWithLine from "@/components/common/TextWithLine/TextWithLine";

interface IPropsType {
  category: string;
}

export default function BoardCardList({ category }: IPropsType) {
  const [isList, setIsList] = useState(true);

  const dummy = [
    {
      id: "0",
      thumbnail:
        "https://velog.velcdn.com/images/ccamy0915/post/1e816615-a9a7-4c5b-9e39-8a87f78bebf2/image.png",
      title: "[프로그래머스 / 더 맵게 / Java]",
      tags: ["프로그래머스", "Java"],
      desc: "오랜만에 올리는 알고리즘 포스팅이다 하하 다음부터는 제대로 해야겠다 싶으면서도 마음처럼 되지 않는 블로그인 것이어요 오랜만에 올리는 알고리즘 포스팅이다 하하 다음부터는 제대로 해야겠다 싶으면서도 마음처럼 되지 않는 블로그인 것이어요",
    },
    {
      id: "1",
      thumbnail:
        "https://velog.velcdn.com/images/ccamy0915/post/dc3aa507-af6a-414e-aaad-46bd59effcbc/image.png",
      title: "[프로그래머스 / 전화번호 목록 / python]",
      tags: ["python", "코딩테스트", "코테", "파이썬", "프로그래머스", "해시"],
      desc: "오늘의 문제는 프로그래머스의 Lv.2 전화번호 목록 ! 바로 풀고 싶다면 요기로 → 문제 바로가기",
    },
    {
      id: "2",
      thumbnail:
        "https://velog.velcdn.com/images/ccamy0915/post/3e9f6514-1348-4fc4-bb3d-e71d2ae61c25/image.png",
      title: "[프로그래머스 / 할인 행사 / python]",
      tags: ["python", "코딩테스트", "코테", "파이썬", "프로그래머스"],
      desc: "오랜만에 올리는 알고리즘 포스팅이다 하하 다음부터는 제대로 해야겠다 싶으면서도 마음처럼 되지 않는 블로그인 것이어요",
    },
    {
      id: "3",
      thumbnail:
        "https://velog.velcdn.com/images/ccamy0915/post/dc3aa507-af6a-414e-aaad-46bd59effcbc/image.png",
      title: "[프로그래머스 / 전화번호 목록 / python]",
      tags: ["python", "코딩테스트", "코테", "파이썬", "프로그래머스", "해시"],
      desc: "오늘의 문제는 프로그래머스의 Lv.2 전화번호 목록 ! 바로 풀고 싶다면 요기로 → 문제 바로가기",
    },
    {
      id: "4",
      thumbnail:
        "https://velog.velcdn.com/images/ccamy0915/post/3e9f6514-1348-4fc4-bb3d-e71d2ae61c25/image.png",
      title: "[프로그래머스 / 할인 행사 / python]",
      tags: ["python", "코딩테스트", "코테", "파이썬", "프로그래머스"],
      desc: "오랜만에 올리는 알고리즘 포스팅이다 하하 다음부터는 제대로 해야겠다 싶으면서도 마음처럼 되지 않는 블로그인 것이어요",
    },
  ];

  return (
    <div className="w-full mx-auto flex flex-col gap-[3rem] max-w-[80rem]">
      <div className="w-full flex justify-between">
        <TextWithLine text={category} size="M" />
        <div className="flex gap-[1.5rem]">
          <button
            type="button"
            onClick={() => {
              setIsList(true);
            }}
          >
            <ListBulletIcon width={30} color={isList ? "#6eb098" : "#a5a5a5"} />
          </button>
          <button
            type="button"
            onClick={() => {
              setIsList(false);
            }}
          >
            <Squares2X2Icon width={30} color={isList ? "#a5a5a5" : "#6eb098"} />
          </button>
        </div>
      </div>
      <div
        className={`w-full grid ${
          isList ? "gap-[5rem] grid-cols-1" : "grid-cols-2 place-items-center"
        }`}
      >
        {dummy.map((post) => {
          return <BoardCard key={post.id} post={post} isList={isList} />;
        })}
      </div>
    </div>
  );
}
