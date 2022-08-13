import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useChangeLayout from "../../../hooks/useChangeLayout";
import Meta from "../Meta";
import SideBar from "../sidebar/SideBar";

type Props = {
  children: React.ReactNode;
};

const urlsUsingSecondarySidebar = ["/overview", "/symptoms"];
const urlsWithWhiteBg = ["/symptoms"];

const MainTemplate = ({ children }: Props) => {
  const router = useRouter();
  const { handleChangeLayout, backgroundColor, handleBackgroundColor } = useChangeLayout();
  const [sidePanelWidth, setSidePanelWidth] = useState(0);

  const getWidthOfSideTemplate = () => {
    const sideTemplate = document.getElementById("side_template");
    sideTemplate && setSidePanelWidth(sideTemplate.clientWidth);
  };

  useEffect(() => {
    const matchedUrlSideBar = urlsUsingSecondarySidebar.find(
      url => url === router.pathname
    );

    const matchedUrlWhiteBg = urlsWithWhiteBg.find(
      url => url === router.pathname
    );

    matchedUrlWhiteBg && matchedUrlWhiteBg.length > 0
      ? handleBackgroundColor("#FFFFFF")
      : handleBackgroundColor("#F2F2F2");

    
    if (matchedUrlSideBar && matchedUrlSideBar.length > 0) {
      handleChangeLayout(true);
      getWidthOfSideTemplate();
    } else {
      handleChangeLayout(false);
      setSidePanelWidth(0);
    }
  }, [router.pathname]);

  return (
    <>
      <Meta />
      <div className="flex bg-[#0E0D21]">
        <SideBar />
        <div
          className={`rounded-l-[26px] w-full px-14 py-12 min-h-screen transition-all ml-[129px]`}
          style={{
            marginRight: `${sidePanelWidth}px`,
            backgroundColor: backgroundColor,
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default MainTemplate;
