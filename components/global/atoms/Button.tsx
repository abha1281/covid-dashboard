import React from "react";

type Props = {
  icon: React.ReactNode;
  className?: string;
  name?: string;
  onClick: () => void;
};

const Button = ({ icon, name, className = "", onClick }: Props) => {
    return (
    <button onClick={onClick} className={className}>
      {icon}
      {name && <p className="ml-2">{name}</p>}
    </button>
  );
};

export default Button;
