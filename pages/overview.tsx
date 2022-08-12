import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NotificationMessage from "../components/global/molecules/NotificationMessage";
import SidePanel from "../components/overview/SidePanel";
import StatMap from "../components/overview/StatMap";
import useChangeLayout from "../hooks/useChangeLayout";

const Overview = () => {
  const { handleChangeLayout } = useChangeLayout();

  useEffect(() => {
    handleChangeLayout(true);
  }, []);

  return (
    <div className="flex">
      <div className="w-full">
        <p className="font-black text-[27px] leading-[40.5px] text-[#261D56]">
          Overview
        </p>
        <div className="mt-11 relative">
          <div className="w-5 h-full absolute -left-1 inset-y-0 rounded-l-[20px] bg-[#FD79A8]" />
          <NotificationMessage
            title="Why social distancing is "
            titleFocusText="important?"
            imageName="OverviewIllustration"
            widthOfImage={312}
            heightOfImage={183}
          />
        </div>
        <StatMap />
      </div>
      <SidePanel />
    </div>
  );
};

export default Overview;
