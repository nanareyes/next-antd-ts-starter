import React, { useEffect, useState } from "react";
import randomColor from "randomcolor";
import ColorBoxes from "./ColorBoxes";
import { Button } from "antd";

const Session03Page: React.FC = () => {
  const [colors, setColors] = useState<string[]>([]);
  // const [numColors, setNumColors] = useState<number>(5);

  useEffect(() => {
    setColors(generateRandomColors());
  }, []);

  //const numColors = 5;
  const generateRandomColors = (numColors = 5) => {
    return Array(numColors)
      .fill(null)
      .map((_) => randomColor());
  };

  const addNewColor = () => {
    //numColors + 1;
    setColors([randomColor(), ...colors]);
    //setNumColors(numColors + 1);
  };
  return (
    <>
      {/**
       * TODO: Adicionar un botón con el label "Update colors". Al darle clic debe generar unos nuevos colores random
       * TODO: Adicionar un botón con el label "New color". Al darle clic se debe crear una nueva caja de color al final de las existentes
       *
       */}
      <Button
        type="primary"
        size={"middle"}
        onClick={() => {
          setColors(generateRandomColors(colors.length));
        }}
      >
        Update colors
      </Button>
      <Button type="primary" size={"middle"} onClick={addNewColor}>
        Add new color start
      </Button>
      <Button
        type="primary"
        size={"middle"}
        onClick={() => {
          setColors([...colors, randomColor()]);
        }}
      >
        Add new color end
      </Button>
      <ColorBoxes colors={colors} />
    </>
  );
};

export default Session03Page;
