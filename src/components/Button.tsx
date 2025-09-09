import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}
const Button = ({ children }: Props) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    console.log(`Button clicked ${newCount} times`);
  };

  return (
    <button type="button" className="btn btn-primary" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
