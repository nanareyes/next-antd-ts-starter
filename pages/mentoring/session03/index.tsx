import randomColor from "randomcolor";
import React from "react";

const Session03Page: React.FC = () => {
  const colors = Array(10)
    .fill(null)
    .map((_) => randomColor());
  console.log(colors);

  // TODO: Borrar la siguiente linea
  return <></>;

  // TODO: Descomentar la siguiente linea
  //   return <ColorBoxes colors={colors} />;
  // TODO: Crear componente ColorBoxes que debe recibir colors como propiedad
  // TODO: Por cada elemento en el array colors, el componente ColorBoxes debe mostrar una caja de width 200 y heigth 100,
  //       usando el valor del elemento como fondo de la caja
  // TODO: Modificar la línea 5, cambiando el número 10 por un 3. Ahora deben verse solamente 3 cajas en la pantalla.
  // TODO: Dentro de la caja, mostrar el código del color como un texto. Ejemplo: #2234ff
};

export default Session03Page;
