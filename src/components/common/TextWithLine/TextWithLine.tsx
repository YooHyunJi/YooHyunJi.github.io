interface IPropsType {
  text: string;
  size: string;
}

export default function TextWithLine({ text, size }: IPropsType) {
  let height = "";
  let widthAndMargin = "";
  let fontSize = "";
  switch (size) {
    case "S":
      height = "h-[1.5rem]";
      widthAndMargin = "w-[0.3rem] mr-[0.7rem]";
      fontSize = "text-[1rem] font-semibold";
      break;
    case "M":
      height = "h-[2rem]";
      widthAndMargin = "w-[0.4rem] mr-[0.9rem]";
      fontSize = "text-[1.5rem] font-semibold";
      break;
    case "L":
      height = "h-[2.5rem]";
      widthAndMargin = "w-[0.4rem] mr-[1.2rem]";
      fontSize = "text-[2rem] font-bold";
      break;
  }

  return (
    <div className={`${height} w-full flex items-center`}>
      <div className={`h-full bg-custom-point ${widthAndMargin}`}></div>
      <p className={`${fontSize}`}>{text}</p>
    </div>
  );
}
