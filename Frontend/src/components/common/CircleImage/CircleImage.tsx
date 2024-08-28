import Image from "next/image";
import dummyImage from "@/../public/긁적.jpeg";

interface IPropsType {
  src: string;
  size: string;
}

export default function CircleImage({ src, size }: IPropsType) {
  let length = "";
  switch (size) {
    case "S":
      length = "w-[2rem] h-[2rem]";
      break;
    case "M":
      length = "w-[10rem] h-[10rem]";
      break;
    case "L":
      length = "w-[15rem] h-[15rem]";
      break;
  }

  return (
    <div className={`${length} rounded-[50%] overflow-hidden shadow-md`}>
      <Image src={src} alt="image" width={1000} height={1000} />
    </div>
  );
}
