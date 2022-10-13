import React from "react";
import Node from "./Node";
const Level = ({ arr }) => {
  return (
    <div className="level">
      {arr.map((ele, index) => {
        return <Node val={ele} key={index} />;
      })}
    </div>
  );
};

export default Level;
