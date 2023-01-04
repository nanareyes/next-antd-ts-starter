import React from "react";

type Props = {
  title?: string;
  value: Array<number | string | boolean>;
  //value: number[];
};

const Session02Page10: React.FC<Props> = ({ title, value }) => {
  return (
    <>
      <p>Title: {title}</p>
      <p>Value: {JSON.stringify(value, null, 2)}</p>
    </>
  );
};

export default Session02Page10;
