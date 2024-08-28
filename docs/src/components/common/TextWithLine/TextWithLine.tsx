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
      height = "h-[1.2rem]";
      widthAndMargin = "w-[0.3rem] mr-[0.4rem]";
      fontSize = "text-[1.1rem] font-bold";
      break;
    case "M":
      height = "h-[1.5rem]";
      widthAndMargin = "w-[0.3rem] mr-[0.5rem]";
      fontSize = "text-[1.2rem] font-bold";
      break;
    case "L":
      height = "h-[1.7rem]";
      widthAndMargin = "w-[0.4rem] mr-[0.7rem]";
      fontSize = "text-[1.5rem] font-bold";
      break;
  }

  return (
    <div className={`${height} flex items-center`}>
      <div className={`h-full bg-custom-point ${widthAndMargin}`}></div>
      <p className={`${fontSize}`}>{text}</p>
    </div>
  );
}
