import React from "react";
import SideBar from "../sidebar/SideBar";

type Props = {
  children: React.ReactNode;
};

const MainTemplate = ({ children }: Props) => {
  return (
    <div className="flex bg-[#0E0D21]">
      <SideBar />
      <div className="rounded-l-[26px] bg-[#F2F2F2] px-14 py-12 w-full h-screen">{children}</div>
    </div>
  );
};

export default MainTemplate;
