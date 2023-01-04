import React, { useState } from "react";
import Session02Page01 from "./Session02Page01";
import Session02Page06 from "./Session02Page06";

const Session02IndexPage: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState(6);

  return (
    <>
      {/**
       * TODO:
       * - Create Page02, Page03, Page04, Page05, Page07, Page08, Page09, Page10
       * - Create a Select with Component 01, ..., Component 10.
       * - When the user clicks in any of those, change the selectedComponent state value
       * - Use conditions to display the 10 components
       */}
      {selectedComponent === 1 && <Session02Page01 />}
      {selectedComponent === 6 && (
        <Session02Page06 value={7} title="Component 06" />
      )}
    </>
  );
};

export default Session02IndexPage;
