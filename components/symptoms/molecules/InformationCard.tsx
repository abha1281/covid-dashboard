import Image from "next/image";
import React from "react";

interface SymptomType {
  id: string;
  name: string;
  desc: string;
  subDesc: string;
  color: string;
}

type Props = {
  symptom: SymptomType;
};

const InformationCard = ({ symptom }: Props) => {
  return (
    <div className="w-max relative">
      <div className="relative w-[250px] h-[265px]">
        <Image
          layout="fill"
          objectFit="contain"
          src={`/symptoms/${symptom.id}.svg`}
          alt={symptom.name}
        />
      </div>
      <div className="w-full bg-white rounded-[20px] z-10 absolute -bottom-32 border-4 border-gray-100 p-5">
        <p className="font-bold text-[20px] text-[#261D56] leading-[30px]">
          {symptom.name}
        </p>
        <p className="text-[15px] text-[#4B4279]">{symptom.desc}</p>
        <div className="bg-gray-100 rounded-[3px] relative h-1.5 w-full">
          <span
            className="w-[90%] inset-0 h-1.5 absolute rounded-[3px]"
            style={{
              backgroundColor: symptom.color,
            }}
          />
        </div>
        <div className="flex gap-x-1 items-center mt-2">
          <p
            className="font-bold text-xs"
            style={{
              color: symptom.color,
            }}
          >
            90%
          </p>
          <p className="text-xs text-[#817C9B]">{symptom.subDesc}</p>
        </div>
        <div />
      </div>
    </div>
  );
};

export default InformationCard;
