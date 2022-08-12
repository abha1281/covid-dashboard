import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CustomLink from "../../global/atoms/CustomLink";
import Icon from "../../icons/Icon";
import SideTraveller from "./SideTraveller";

const defaultPages = [
  {
    name: "Overview",
    icon: "Overview",
    link: "overview",
  },
  {
    name: "Symptoms",
    icon: "Cough",
    link: "symptoms",
  },
  {
    name: "Test Yourself",
    icon: "Flask",
    link: "test_yourself",
  },
  {
    name: "Preventions",
    icon: "Cannabis",
    link: "preventions",
  },
  {
    name: "Hospital",
    icon: "Hospital",
    link: "hospital",
  },
  {
    name: "Emergency",
    icon: "Siren",  
    link: "emergency",
  },
  {
    name: "Journal",
    icon: "Document",
    link: "journal",
  },
];

type Tab = {
  name: string;
  icon: string;
  link: string;
  position?: number;
  width?: number;
  index?: number;
};


const SideBar = () => {
  const router = useRouter();
  const [active, setActive] = useState<Tab | null>(null);
  const [pages, setPages] = useState<Tab[]>(defaultPages);

  const createPositionWidth = () => {
    const updatedPages = defaultPages.map((page, index) => {
      const tab = document.getElementById(`sidebar-${index}-${page.link}`);
      const tabText = document.getElementById(`sidebar-text-${index}-${page.link}`);
      const position = tab ? tab.offsetTop : 0;
      const width = tabText ? tabText.offsetWidth : 0;

      const newDetails = {
        ...page,
        index: index,
        position: position,
        width: width + 52,
      };
      return newDetails;
    });
    return updatedPages;
  };

  useEffect(() => {
    !pages[0].position && setPages(createPositionWidth());
    console.log(createPositionWidth());
  }, [pages]);

  useEffect(() => {
    let activePage = createPositionWidth().find(
      page => page.link === router.pathname.split("/")[1]
    );
    activePage && setActive(activePage);
  }, [router.asPath]);

  return (
    <div className="bg-[#0E0D21] w-[129px] h-full relative">
      {active ? (
        <SideTraveller active={active}  />
      ) : null}
      <div className="flex justify-center pt-10 pb-36">
        <Icon name="Cell" />
      </div>
      <div className="flex flex-col gap-y-6">
        {pages.map((page, index) => (
          <CustomLink link={page.link} key={page.name}>
            <div
              id={`sidebar-${index}-${page.link}`}
              onClick={() => {
                setActive(page)
              }}
              className={`flex pl-2 py-2 flex-col justify-center items-center relative z-10 ${
                active && active.name === page.name ? "stroke-[#0E0D21]" : ""
              } `}
            >
              <Icon name={page.icon} />
              <p
                id={`sidebar-text-${index}-${page.link}`}
                className={`capitalize font-semibold text-sm ${
                  active && active.name === page.name
                    ? "text-[#0E0D21]"
                    : "text-[#CAC6E7]"
                }`}
              >
                {page.name}
              </p>
            </div>
          </CustomLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
