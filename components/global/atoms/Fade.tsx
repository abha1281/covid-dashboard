import { Transition } from "@headlessui/react";
import React from "react";

type Props = {
  show: boolean;
  children: React.ReactNode;
  className?: string;
};

const Fade = ({ show, children, className = "" }: Props) => {
  return (
    <Transition
      show={show}
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
      as="div"
      className={className}
    >
      {children}
    </Transition>
  );
};

export default Fade;
