import BoardCardList from "@/components/boardList/BoardCardList/BoardCardList";
import ButtonWithIcon from "../components/common/ButtonWithIcon/ButtonWithIcon";
import SearchInput from "../components/common/SearchInput/SearchInput";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center w-full h-full p-[1rem] ">
        <div className="flex w-[90%] h-fit gap-[1.5rem] my-[5rem]">
          <SearchInput />
          <ButtonWithIcon text="SEARCH" onClick={console.log("asdf")} />
        </div>
        <div className="w-full">
          <BoardCardList category="알고리즘" />
        </div>
      </div>
    </>
  );
}
