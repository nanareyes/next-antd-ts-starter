import React from "react";
import { Card } from "antd";

type Props = {
  colors: string[];
};
const ColorBoxes: React.FC<Props> = ({ colors }) => {
  return (
    <>
      {colors.map((color) => {
        return (
          <Card
            key={color}
            style={{ width: 200, height: 100, background: `${color}` }}
          >
            {color}
          </Card>
        );
      })}
    </>
  );
};

export default ColorBoxes;
