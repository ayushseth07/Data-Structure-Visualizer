import React from "react";
import GridBlock from "./GridBlock";
const GridRow = ({ row }) => {
  return (
    <div className="Gridrow">
      {row.map((ele) => {
        return <GridBlock />;
      })}
    </div>
  );
};

export default GridRow;
