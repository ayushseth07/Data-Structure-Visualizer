import React, { useState } from "react";
import Verticalarr from "../Components/Verticalarr";
import "../css/Bubble.css";
const Bubble = () => {
  const [string, setString] = useState("");
  const [arr, setArr] = useState([]);
  const [active, setActive] = useState(0);
  const CreateArray = (e) => {
    let temp = string;
    temp = temp.split(",").map((ele) => {
      return parseInt(ele);
    });
    setArr(temp);
    setActive(0);
    //console.log(arr);
  };
  const innSwap = (i, j, temp, n, col) => {
    setTimeout(function () {
      setActive(col);
      if (temp[j] > temp[j + 1]) {
        var x = temp[j];
        temp[j] = temp[j + 1];
        temp[j + 1] = x;
      }
      setArr(temp);
      setArr([...arr]);
    }, 500);
  };
  const innerLoop = (i, j, temp, n, col) => {
    setTimeout(function () {
      for (j = 0; j < n - i - 1; j++) {
        innSwap(i, j, temp, n, col);
      }
    }, i * 1000);
  };
  const Sort = () => {
    let n = arr.length;
    const temp = arr;
    var i, j;

    for (i = 0; i < n - 1; i++) {
      let col = temp[i];
      innerLoop(i, j, temp, n, col);
    }
    setActive(0);
    setActive(0);
  };
  return (
    <div>
      <h2>Bubble Sort</h2>
      <div className="Bubblemain">
        <div className="Bubbledes">
          <p className="Bubbleinfo">
            Bubble sort, sometimes referred to as sinking sort, is a simple
            sorting algorithm that repeatedly steps through the input list
            element by element, comparing the current element with the one after
            it, swapping their values if needed.
          </p>
        </div>
        <div className="bubbleInput">
          <input
            type="text"
            value={string}
            onChange={(e) => {
              setString(e.target.value);
            }}
            placeholder="Enter elements of array seperated by commas"
          />
          <button onClick={CreateArray}>Create Array</button>
        </div>
      </div>
      <div className="sortArray">
        {arr.map((ele, index) => {
          return <Verticalarr count={ele} key={index} active={active} />;
        })}
      </div>
      <button onClick={Sort}>Sort</button>
    </div>
  );
};

export default Bubble;
