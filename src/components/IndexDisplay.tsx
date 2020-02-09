import React from "react";

type Props = {
  index: number;
  offset?: number;
  digits?: number;
  suffix?: string;
};

const IndexDisplay: React.FC<Props> = ({
  index,
  offset = 1,
  digits = 1,
  suffix = ""
}) => {
  return (
    <span>
      {(index + offset).toString().padStart(digits, "0")}
      {suffix}
    </span>
  );
};

export default IndexDisplay;
