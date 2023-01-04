import React from "react";

type Props = {
  title?: string;
  value: string;
};

const Session02Page08: React.FC<Props> = ({ title, value }) => {
  return (
    <>
      <p>Title: {title}</p>
      <p>Value: {value}</p>
    </>
  );
};
export default Session02Page08;
