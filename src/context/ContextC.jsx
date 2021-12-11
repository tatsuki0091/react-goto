import React, { useContext } from "react";
import { Context } from "../App";

const ContextC = () => {
  const test = useContext(Context);
  return (
    <div>
      <p>{test.contextTest}</p>
      <h2>ContextC</h2>
    </div>
  );
};

export default ContextC;
