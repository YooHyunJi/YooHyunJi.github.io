import BoardCardList from "@/components/boardList/BoradCardList/BoradCardList";
import ButtonWithIcon from "../components/common/ButtonWithIcon/ButtonWithIcon";
import SearchInput from "../components/common/SearchInput/SearchInput";

export default function Page() {
  return (
    <div className="flex flex-col items-center w-full h-full px-[7rem] py-[5rem] ml-[-1.5rem]">
      <div className="flex w-fit h-fit gap-[1.5rem] mb-[10rem]">
        <SearchInput />
        <ButtonWithIcon text="SEARCH" onClick={console.log("asdf")} />
      </div>
      <div className="w-full">
        <BoardCardList category="알고리즘" />
      </div>
    </div>
  );
}
