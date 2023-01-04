import React, { useState } from "react";
import { Button, Progress } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const StatePage: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button
        type="primary"
        shape="circle"
        icon={<PlusOutlined />}
        onClick={() => {
          setCount(count + 1);
        }}
      />
      <Button
        type="primary"
        shape="circle"
        icon={<MinusOutlined />}
        onClick={() => {
          setCount(count - 1);
        }}
      />
      <h3>{count}</h3>
      <Progress type="circle" percent={count * 10} />
    </>
  );
};

/**
 *
 * Tareas:
 *
 * 1. El valor del contador nunca puede ser menor a cero
 * 2. El valor del contador nunca puede ser mayor a diez
 *
 */
export default StatePage;
