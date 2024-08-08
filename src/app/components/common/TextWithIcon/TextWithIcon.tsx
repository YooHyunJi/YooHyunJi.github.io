interface IPropsType {
  icon: string | React.JSX.Element;
  text: string;
}

export default function TextWithIcon({ icon, text }: IPropsType) {
  return (
    <div className="flex h-[2rem] items-center gap-[0.5rem]">
      {icon}
      {text}
    </div>
  );
}
