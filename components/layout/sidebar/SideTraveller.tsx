import React from "react";

type Props = {
  active: {
    name: string;
    icon: string;
    link: string;
    position?: number;
    width?: number;
    index?: number;
  } | null;
};

const SideTraveller = ({ active }: Props) => {
  return (
    <>
      <div
        className={`bg-[#F2F2F2] absolute w-1/2 -right-1 transition-all`}
        style={{
          top: `${active && active.position && active.position - 60}px`,
          height: `180px`,
        }}
      />

      <div
        className="bg-[#0E0D21] rounded-b-[26px] absolute w-full transition-all"
        style={{
          top: `${active && active.position && active.position - 61}px`,
          height: `63px`,
        }}
      />

      <div
        className="bg-[#F2F2F2] absolute transition-all rounded-l-[26px] right-0 z-0 side-tab w-[95%]"
        style={{
          top: `${active && active.position && active.position}px`,
          height: `60px`,
        }}
      />

      <div
        className="bg-[#0E0D21] rounded-t-[26px] absolute w-full transition-all"
        style={{
          top: `${active && active.position && active.position + 60}px`,
          height: `61px`,
        }}
      />
    </>
  );
};

export default SideTraveller;
