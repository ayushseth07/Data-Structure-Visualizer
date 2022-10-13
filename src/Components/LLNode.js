import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { IconContext } from "react-icons";
const ListNode = ({ val, next }) => {
  return (
    <div className="listnode">
      <IconContext.Provider
        value={{ color: "blue", className: "global-class-name", size: "3rem" }}
      >
        <div className="val">
          <p>{val}</p>
          <HiOutlineArrowRight />
        </div>
      </IconContext.Provider>
      <div>{next === true ? <></> : <p className="null">null</p>}</div>
    </div>
  );
};

export default ListNode;
