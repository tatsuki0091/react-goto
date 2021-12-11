import React, { useContext } from "react";
import ContextB from "./ContextB";
import { Context } from "../App";
const ContextA = () => {
  const test = useContext(Context);
  console.log(test);
  return (
    <div>
      <p>{test.contextTest}</p>
      <ContextB />
    </div>
  );
};

export default ContextA;
