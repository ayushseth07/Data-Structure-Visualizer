import React from "react";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { IconContext } from "react-icons";
const Invisible = ({ pointer }) => {
  if (pointer === "1") {
    return (
      <IconContext.Provider
        value={{ color: "blue", className: "global-class-name", size: "3rem" }}
      >
        <div className="invBlock">
          <p>rear</p>
          <ImArrowDown />
        </div>
      </IconContext.Provider>
    );
  } else if (pointer === "2") {
    return (
      <IconContext.Provider
        value={{ color: "red", className: "global-class-name", size: "3rem" }}
      >
        <div className="invBlock">
          <ImArrowUp />
          <p>front</p>
        </div>
      </IconContext.Provider>
    );
  } else return <div className="invBlock"></div>;
};

export default Invisible;

