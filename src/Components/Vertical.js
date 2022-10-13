import React from "react";
import UnitBlock from "./UnitBlock";
const Vertical = ({ row, count, active }) => {
  return (
    <div className="colum">
      {row.map((ele) => {
        return (
          <UnitBlock ele={count} col={active === row.length ? true : false} />
        );
      })}
    </div>
  );
};

export default Vertical;
