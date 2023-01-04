import React, { useState } from "react";
import { Select } from "antd";
import Session02Page01 from "./Session02Page01";
import Session02Page02 from "./Session02Page02";
import Session02Page03 from "./Session02Page03";
import Session02Page04 from "./Session02Page04";
import Session02Page05 from "./Session02Page05";
import Session02Page06 from "./Session02Page06";
import Session02Page07 from "./Session02Page07";
import Session02Page08 from "./Session02Page08";
import Session02Page09 from "./Session02Page09";
import Session02Page10 from "./Session02Page10";

const Session02IndexPage: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState(1);

  const handleChange = (value: number) => {
    setSelectedComponent(value);
  };

  return (
    <>
      {/**
       * TODO:
       * - Create Page02, Page03, Page04, Page05, Page07, Page08, Page09, Page10
       * - Create a Select with Component 01, ..., Component 10.
       * - When the user clicks in any of those, change the selectedComponent state value
       * - Use conditions to display the 10 components
       */}
      <Select
        defaultValue={1}
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          {
            value: 1,
            label: "Page01",
          },
          {
            value: 2,
            label: "Page02",
          },
          {
            value: 3,
            label: "Page03",
          },
          {
            value: 4,
            label: "Page04",
          },
          {
            value: 5,
            label: "Page05",
          },
          {
            value: 6,
            label: "Page06",
          },
          {
            value: 7,
            label: "Page07",
          },
          {
            value: 8,
            label: "Page08",
          },
          {
            value: 9,
            label: "Page09",
          },
          {
            value: 10,
            label: "Page10",
          },
        ]}
      />
      {selectedComponent === 1 && <Session02Page01 />}
      {selectedComponent === 2 && <Session02Page02 />}
      {selectedComponent === 3 && <Session02Page03 />}
      {selectedComponent === 4 && <Session02Page04 />}
      {selectedComponent === 5 && <Session02Page05 />}
      {selectedComponent === 6 && (
        <Session02Page06 value={7} title="Component 06" />
      )}
      {selectedComponent === 7 && (
        <Session02Page07 title="Page 07" value={false} />
      )}
      {selectedComponent === 8 && (
        <Session02Page08
          title="Page 08"
          value={"Esta actividad estuvo interesante"}
        />
      )}
      {selectedComponent === 9 && (
        <Session02Page09
          title="Page 09."
          value={{ name: "carolina", id: 37864930 }}
        />
      )}
      {selectedComponent === 10 && (
        <Session02Page10
          title="Page 10"
          value={[1, 2, 3, 4, 5, 6, 78, 9, 10]}
        />
      )}
    </>
  );
};

export default Session02IndexPage;
