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
          // TODO: Convertir el Card en un componente que reciba un color como propiedad
          <Card
            key={color}
            style={{ width: 200, height: 100, background: `${color}` }}
          >
            <span>{color}</span>
          </Card>
        );
      })}
    </>
  );
};

export default ColorBoxes;
