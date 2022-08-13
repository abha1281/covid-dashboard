import React from "react";

type Props = {
  children: React.ReactNode;
};

const SideTemplate = ({ children }: Props) => {
  return (
    <div id="side_template" className="fixed right-[0px] top-0 bg-[#E7EDF6] h-screen overflow-y-auto">
      {children}
    </div>
  );
};

export default SideTemplate;
