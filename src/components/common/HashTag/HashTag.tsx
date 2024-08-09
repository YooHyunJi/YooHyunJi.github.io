interface IPropsType {
  text: string;
}

export default function HashTag({ text }: IPropsType) {
  return (
    <div className="border border-custom-point text-custom-point px-[0.7rem] py-[0.2rem] rounded-full">
      {text}
    </div>
  );
}
