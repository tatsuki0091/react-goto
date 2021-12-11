import React, { useContext } from "react";
import { Context } from "../App";

const ContextD = () => {
  const test = useContext(Context);
  return (
    <div>
      <p>{test.contextTest}</p>
      <h2>ContextD</h2>
    </div>
  );
};

export default ContextD;
