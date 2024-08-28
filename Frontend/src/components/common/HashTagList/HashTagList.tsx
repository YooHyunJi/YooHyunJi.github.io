import HashTag from "../HashTag/HashTag";

interface IPropsType {
  tagList: string[];
}

export default function HashTagList({ tagList }: IPropsType) {
  return (
    <div className="flex gap-[0.7rem] flex-wrap">
      {tagList.map((tag) => {
        return <HashTag key={tag} text={tag} />;
      })}
    </div>
  );
}
