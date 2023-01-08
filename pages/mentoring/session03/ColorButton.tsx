import React from "react";
import { Button } from "antd";

type Props = {
  colors: Array<string>;
};

const ColorButton: React.FC<Props> = ({ colors }) => {
  return (
    <>
      {colors.map((item) => (
        <Button
          key={item}
          type="dashed"
          style={{ background: `${item}`, width: "100px", height: "50px" }}
        >
          {item}
        </Button>
      ))}
    </>
  );
};

export default ColorButton;
