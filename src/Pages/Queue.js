import React, { useState } from "react";
import QueueBlocks from "../Components/QueueBlocks";
import "../css/Queue.css";
import Swal from "sweetalert2";
import Invisible from "../Components/invisible";

const Queue = () => {
  const [queue, setQueue] = useState(["", "", "", "", ""]);
  const [inv, setInv] = useState(["1", "", "", "", "", "", ""]);
  const [inv2, setInv2] = useState(["2", "", "", "", "", "", ""]);
  const [front, setFront] = useState(-1);
  const [idx, setIdx] = useState(-1);
  const [val, setVal] = useState("");
  const handleEnqueue = () => {
    if (idx + 1 < 5) {
      if (idx === -1) {
        setFront(0);
        let temp2 = [...inv2];
        temp2[0] = "";
        temp2[1] = "2";
        setInv2(temp2);
      }
      let arr = [...queue];
      arr[idx + 1] = val;
      setVal("");
      let temp = [...inv];
      temp[idx + 1] = "";
      temp[idx + 2] = "1";
      setInv(temp);
      setIdx(idx + 1);
      setQueue(arr);
    } else {
      Swal.fire({
        icon: "info",
        title: "Queue is Full !",
      });
      //alert("Queue is full !");
      setVal("");
    }
  };
  const handleDequeue = () => {
    if (front >= 0 && front <= idx) {
      let arr = [...queue];
      arr[front] = "";
      let temp2 = [...inv2];
      temp2[front + 1] = "";
      temp2[front + 2] = "2";
      setInv2(temp2);
      setQueue(arr);
      setFront(front + 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Queue is empty !",
        text: "No elements in queue to remove.",
      });
    }
  };
  const peek = () => {
    if (idx >= 0) {
      Swal.fire({
        icon: "info",
        title: `The element in the front is ${queue[0]}`,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Queue is empty !",
      });
    }
  };
  return (
    <>
      <h2>Queue</h2>
      <div className="queueMain">
        <div className="description">
          <p className="stackInfo">
            A queue is defined as a linear data structure that is open at both
            ends and the operations are performed in First In First Out (FIFO)
            order. There are many real-life examples of a Queue.There are
            various queue operations that are applicable on a queue. Some of the
            queue operations are given below -
            <ul>
              <li>
                enqueue() - Process of adding or storing an element to the end
                of the queue
              </li>
              <li>
                dequeue() -Process of removing or accessing an element from the
                front of the queue.
              </li>
              <li>
                Peek - Used to get the element at the front of the queue without
                removing it
              </li>
            </ul>
          </p>
        </div>
        <div>
          <div className="arrOr">
            <div className="invisibleArr">
              {inv.map((ele, index) => {
                return <Invisible pointer={ele} key={index} />;
              })}
            </div>
            <div className="queue">
              {queue.map((ele, index) => {
                return <QueueBlocks value={ele} key={index} />;
              })}
            </div>
            <div className="invisibleArr">
              {inv2.map((ele, index) => {
                return <Invisible pointer={ele} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="inputQueue">
        <h3>Try it Yourself</h3>
        <div className="Qop">
          <div className="pushQueue">
            <input
              type="text"
              value={val}
              onChange={(e) => {
                setVal(e.target.value);
              }}
              placeholder="Enter a value to enqueue"
            />
            <button className="qBtn" onClick={handleEnqueue}>
              Enqueue
            </button>
          </div>
          <div className="popQueue">
            <button className="qBtn" onClick={handleDequeue}>
              Dequeue
            </button>
          </div>
          <div className="peekQueue">
            <button className="qBtn" onClick={peek}>
              Peek
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Queue;
