import Image from "next/image";

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

interface Props {
  sourceImage: string | StaticImageData;
  width: string | number | undefined;
  height: string | number | undefined;
  skillName: string;
}

export default function Skill({
  sourceImage,
  width,
  height,
  skillName,
}: Props) {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 select-none cursor-pointer">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image
            src={sourceImage}
            width={width}
            height={height}
            alt="skillItem"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{skillName}</h3>
        </div>
      </div>
    </div>
  );
}
