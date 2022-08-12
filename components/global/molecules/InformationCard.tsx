import React, { useEffect } from "react";
import useColorLookup from "../../../hooks/useColorLookup";

type Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
  color: string;
};

const InformationCard = ({ icon, title, text, color }: Props) => {
  const { getHexTransparency } = useColorLookup();

    useEffect(() => {
        console.log();
    },[])

  return (
    <div
      className="flex gap-x-[23px] px-[26px] py-5 rounded-[10px]"
      style={{
        backgroundColor: getHexTransparency(color, 10),
      }}
    >
      <div>{icon}</div>
      <div
        style={{
          color: color,
        }}
      >
        <p className="font-bold text-[26px] leading-[39px] whitespace-nowrap">{title}</p>
        <p className="font-medium text-[15px] leading-[22.5px] text-[#4B4279]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default InformationCard;
