import React from "react";

type Props = {
  title?: string;
  value: number;
};

const Session02Page06: React.FC<Props> = ({ title, value }) => {
  return (
    <>
      <p>Title: {title}</p>
      <p>Value: {value}</p>
    </>
  );
};

export default Session02Page06;
