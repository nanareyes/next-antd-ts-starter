import React from "react";

type Props = {
  title?: string;
  value: Record<string, string | number>;
};

const Session02Page09: React.FC<Props> = ({ title, value }) => {
  return (
    <>
      <p>Title: {title}</p>
      <p>Value: {JSON.stringify(value, null, 2)}</p>
    </>
  );
};

export default Session02Page09;
