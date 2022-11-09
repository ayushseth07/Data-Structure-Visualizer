import React from "react";
import "../css/Home.css";
const Home = () => {
  return (
    <div>
      <h1>Select a Data Structure</h1>
      <ul className="options">
        <li className="option">
          <a className="link" href="/stack">
            Stack
          </a>
        </li>
        <li className="option">
          <a className="link" href="/queue">
            Queue
          </a>
        </li>
        <li className="option">
          <a className="link" href="/linkedlist">
            LinkedList
          </a>
        </li>
        <li className="option">
          <a className="link" href="/bst">
            Binary Search Tree
          </a>
        </li>
        <li className="option">
          <a className="link" href="/bubble">
            Bubble Sort
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
