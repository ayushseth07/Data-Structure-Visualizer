import React from "react";

const Node = ({ val }) => {
  return (
    <div className="node">
      <p className="num">{val}</p>
    </div>
  );
};

export default Node;
