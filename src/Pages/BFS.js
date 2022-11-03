import React, { useState } from "react";
import GridRow from "../Components/GridRow";
import "../css/BFS.css";

const BFS = () => {
  const [grid, setGrid] = useState([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
  return (
    <>
      <h2>BFS</h2>
      <div className="BFSmain">
        <div className="bfsDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          quam ipsam enim beatae expedita laboriosam porro rem cupiditate omnis
          odio, veniam eveniet? Sed quia ab minus error voluptatibus, fugiat
          amet.
        </div>
        <div className="bfsGrid">
          {grid.map((row) => {
            return <GridRow row={row} />;
          })}
        </div>
      </div>
    </>
  );
};

export default BFS;
