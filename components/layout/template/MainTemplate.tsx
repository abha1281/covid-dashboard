import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useChangeLayout from "../../../hooks/useChangeLayout";
import Meta from "../Meta";
import SideBar from "../sidebar/SideBar";

type Props = {
  children: React.ReactNode;
};

const urlsUsingSecondarySidebar = ["/overview"];

const MainTemplate = ({ children }: Props) => {
  const router = useRouter();
  const { hasSecondarySidebar, handleChangeLayout } = useChangeLayout();
  const [sidePanelWidth, setSidePanelWidth] = useState(0);

  const getWidthOfSideTemplate = () => {
    const sideTemplate = document.getElementById("side_template");
    sideTemplate && setSidePanelWidth(sideTemplate.clientWidth);
  };

  useEffect(() => {
    getWidthOfSideTemplate();
  }, [hasSecondarySidebar]);

  useEffect(() => {
    urlsUsingSecondarySidebar.map(url => {
      if (router.pathname !== url) {
        handleChangeLayout(false);
      }
    });
  }, [router.asPath]);

  return (
    <>
      <Meta />
      <div className="flex bg-[#0E0D21]">
        <SideBar />
        <div
          className="rounded-l-[26px] bg-gray-100 px-14 py-12 h-screen transition-all ml-[129px]"
          style={{
            width: hasSecondarySidebar
              ? `calc(100% - ${sidePanelWidth + 129}px)`
              : "100%",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default MainTemplate;
