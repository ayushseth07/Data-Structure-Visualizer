import React, { useState } from "react";
import Block from "../Components/Block";
import "../css/stack.css";
import Swal from "sweetalert2";
const Stack = () => {
  const [array, setArray] = useState(["", "", "", "", "", ""]);
  const [idx, setIdx] = useState(6);
  const [value, setValue] = useState("");
  const handlePush = () => {
    if (idx - 1 < 0) {
      alert("Stack is full");
    } else {
      let arr = [...array];
      arr[idx - 1] = value;
      setIdx(idx - 1);
      setArray(arr);
    }
    setValue("");
  };
  const handlePop = () => {
    if (idx >= 6) {
      Swal.fire({
        icon: "error",
        title: "Stack is Empty !",
        text: "There are no elements in the stack to pop.",
      });
      //alert("No elements in stack to pop!");
    } else {
      let arr = [...array];
      arr[idx] = "";
      setArray(arr);
      setIdx(idx + 1);
    }
  };
  const handlePeek = () => {
    if (idx < 6) {
      Swal.fire({
        icon: "info",
        title: `${array[idx]}`,
        text: `The element on top is ${array[idx]}`,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Stack is Empty !",
      });
    }
  };
  return (
    <>
      <h2>Stack</h2>
      <div className="main">
        <div className="description">
          <p className="stackInfo">
            Stack is a linear data structure which follows a particular order in
            which the operations are performed. The order is LIFO(Last In First
            Out). There are many real-life examples of a stack. Consider an
            example of plates stacked over one another in the canteen.There are
            various stack operations that are applicable on a stack. Some of the
            stack operations are given below -
            <ul>
              <li>
                Push - Push is a function in stack definition that is used to
                insert data at the stack's top.
              </li>
              <li>
                Pop - Pop is a function in the stack definition which is used to
                remove data from the stack's top.
              </li>
              <li>
                Peek - Peek is a function in the stack which is used to extract
                the element present at the stack top.
              </li>
            </ul>
          </p>
        </div>
        <div className="input">
          <h3>Try it yourself</h3>
          <div className="push">
            <p className="op-heading">Push a value into the stack</p>
            <div className="temp">
              <input
                type="text"
                name="value"
                placeholder="Enter value to be pushed"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
              <button className="allBtn" onClick={handlePush}>
                Push
              </button>
            </div>
          </div>
          <div className="pop">
            <p className="op-heading">Pop the top of stack</p>
            <button className="allBtn" onClick={handlePop}>
              Pop
            </button>
          </div>
          <div className="peek">
            <p className="op-heading">Get the top of stack</p>
            <button className="allBtn" onClick={handlePeek}>
              Peek
            </button>
          </div>
        </div>
        <div className="stack">
          <div className="stackIn">
            {array.map((ele, index) => {
              return <Block value={ele} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stack;
