import { useState } from "react";

const useChangeLayout = () => {
  const [hasSecondarySidebar, setHasSecondarySidebar] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("");

  const handleChangeLayout = (hasSideBar: boolean) => {
    setHasSecondarySidebar(hasSideBar);
  };

  const handleBackgroundColor = (color: string) => {
    console.log(color);
    setBackgroundColor(color);
  }

  return {
    hasSecondarySidebar,
    handleChangeLayout,
    backgroundColor,
    handleBackgroundColor,
  };
};

export default useChangeLayout;
