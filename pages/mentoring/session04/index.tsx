import React, { useEffect, useState } from "react";
import randomColor from "randomcolor";
import ColorBoxes from "./ColorBoxes";

const Session03Page: React.FC = () => {
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    setColors(generateRandomColors());
  }, []);

  const generateRandomColors = () => {
    return Array(5)
      .fill(null)
      .map((_) => randomColor());
  };

  return (
    <>
      {/**
       * TODO: Adicionar un botón con el label "Update colors". Al darle clic debe generar unos nuevos colores random
       * TODO: Adicionar un botón con el label "New color". Al darle clic se debe crear una nueva caja de color al final de las existentes
       *
       */}
      <ColorBoxes colors={colors} />
    </>
  );
};

export default Session03Page;
