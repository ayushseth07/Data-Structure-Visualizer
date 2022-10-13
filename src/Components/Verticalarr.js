import React, { useState, useEffect } from "react";
import Vertical from "./Vertical";
const Verticalarr = ({ count, active }) => {
  const [size, setSize] = useState(0);
  useEffect(() => {
    setSize(count);
  }, [count]);

  const rows = [];
  for (let index = 0; index < size; index++) {
    rows.push(count);
  }
  return (
    <div className="lable">
      {" "}
      <Vertical row={rows} count={count} active={active} /> <p>{count}</p>
    </div>
  );
};

export default Verticalarr;
