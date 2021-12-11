import React, { useContext } from "react";
import ContextC from "./ContextC";
import ContextD from "./ContextD";
import { Context } from "../App";

const ContextB = () => {
  const test = useContext(Context);
  return (
    <div>
      <p>{test.contextTest}</p>
      <h2>COntextB</h2>
      <ContextC />
      <ContextD />
    </div>
  );
};

export default ContextB;
