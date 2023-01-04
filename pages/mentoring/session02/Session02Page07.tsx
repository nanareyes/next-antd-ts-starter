import React from "react";

type Props = {
  title?: string;
  value: boolean;
};

const Session02Page07: React.FC<Props> = ({ title, value }) => {
  return (
    <>
      <p>Title: {title}</p>
      <p>Value: {`${value}`}</p>
    </>
  );
};

export default Session02Page07;
