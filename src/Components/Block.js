import React from "react";
import "../css/Block.css";
const Block = ({ value }) => {
  const active = value === "" ? "empty" : "block";
  return (
    <div className={active}>
      <p className="num">{value}</p>
    </div>
  );
};

export default Block;
