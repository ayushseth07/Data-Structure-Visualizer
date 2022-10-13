import React from "react";

const UnitBlock = ({ ele, col }) => {
  const c = col === true ? "unitBlockA" : "unitBlock";
  return <div className={c}></div>;
};

export default UnitBlock;
