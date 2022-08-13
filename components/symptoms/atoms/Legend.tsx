import React from "react";
import useColorLookup from "../../../hooks/useColorLookup";

type Props = {
  color: string;
  text: string;
};

const Legend = ({ text, color }: Props) => {
  const { getHexTransparency } = useColorLookup();
  return (
    <div className="flex gap-x-2 items-center">
      <div
        className="rounded-full border"
        style={{
          borderColor: getHexTransparency(color, 10),
        }}
      >
        <div
          className="w-[9px] h-[9px] m-1 rounded-full "
          style={{
            backgroundColor: color,
          }}
        />
      </div>
      <p className="text-[#4B4279] text-xs">{text}</p>
    </div>
  );
};

export default Legend;
