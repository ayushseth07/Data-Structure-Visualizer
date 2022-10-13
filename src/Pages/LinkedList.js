import React, { useState } from "react";
import "../css/LinkedList.css";
import ListNode from "../Components/LLNode";
class LLNode {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
const AddAtSpecific = (head, val, pos) => {
  let temp = head;
  while (pos > 1) {
    temp = temp.next;
    pos--;
  }
  let Next = temp.next;
  let node = new LLNode(val);
  node.next = Next;
  temp.next = node;
  return head;
};
const AddAtEnd = (head, val) => {
  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
  }
  let node = new LLNode(val);
  temp.next = node;
  //console.log(temp);
  return head;
};
const DeleteFromSpecific = (head, pos) => {
  let temp = head;
  let prev = null;
  while (pos > 0) {
    prev = temp;
    temp = temp.next;
    pos--;
  }
  prev.next = temp.next;
  return head;
};
const DeleteHead = (head) => {
  let temp = head.next;
  head.next = null;
  return temp;
};
const ListToArray = (head) => {
  let arr = [];
  let temp = head;
  while (temp !== null) {
    arr.push(temp.data);
    temp = temp.next;
  }
  return arr;
};
const LinkedList = () => {
  const [head, setHead] = useState(null);
  const [arr, setArr] = useState([]);
  const [obj, setObj] = useState({ val: "", pos: "" });
  //methods
  const createList = (val) => {
    var temp = new LLNode(val);
    return temp;
  };
  const HandleCreate = () => {
    let x = obj.val;
    let temp = createList(x);
    console.log(temp);
    setHead(temp);
    //console.log(head);
    setObj({ val: "", pos: "" });
    let values = ListToArray(temp);
    setArr(values);
  };
  const HandleAdd = () => {
    let n = obj.pos;
    let x = obj.val;
    let temp = head;
    if (n === "") {
      temp = AddAtEnd(temp, x);
    } else {
      console.log(obj);
      temp = AddAtSpecific(temp, x, n);
    }
    setHead(temp);
    //console.log(temp);
    setObj({ val: "", pos: "" });
    console.log(head);
    let values = ListToArray(head);
    setArr(values);
  };
  const HandleDelete = () => {
    let n = obj.pos;
    let temp = head;
    if (n === 0) {
      temp = DeleteHead(temp);
    } else {
      temp = DeleteFromSpecific(temp, n);
    }
    setObj({ val: "", pos: "" });
    setHead(temp);
    console.log(head);
    let values = ListToArray(head);
    setArr(values);
  };
  return (
    <>
      <h2>Linked List</h2>
      <div className="LinkedList">
        <div className="des">
          <p className="LLinfo">
            A linked list is a linear data structure that includes a series of
            connected nodes where each node contains a data field and a
            reference(link) to the next node in the list.
          </p>
        </div>
        <div className="operations">
          <div className="create">
            <h3 className="subhead">Create a new Linked List</h3>
            <div className="inputSub1">
              <input
                className="createInput"
                type="text"
                placeholder="Enter the value of node"
                value={obj.val}
                onChange={(e) => {
                  setObj({ ...obj, val: e.target.value });
                }}
              />
              <button onClick={HandleCreate} className="createButton qBtn">
                Create
              </button>
            </div>
          </div>
          <div className="add">
            <h3 className="subhead">Add a node</h3>
            <div className="inputSub">
              <input
                className="addInput"
                type="text"
                placeholder="Enter the value of node"
                value={obj.val}
                onChange={(e) => {
                  setObj({ ...obj, val: e.target.value });
                }}
              />
              <input
                type="text"
                className="addInput"
                value={obj.pos}
                onChange={(e) => {
                  setObj({ ...obj, pos: e.target.value });
                }}
                placeholder="Specify the position"
              />
              <button onClick={HandleAdd} className="addButon qBtn">
                Add
              </button>
            </div>
          </div>
          <div className="delete">
            <h3 className="subhead">Delete a node</h3>
            <div className="inputSub1">
              <input
                type="text"
                value={obj.pos}
                placeholder="Specify the position"
                onChange={(e) => {
                  setObj({ ...obj, pos: e.target.value });
                }}
                className="deleteInput"
              />
              <button onClick={HandleDelete} className="deleteButton qBtn">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="llDisplay">
        {arr.map((ele, index) => {
          return (
            <ListNode
              val={ele}
              next={index === arr.length - 1 ? false : true}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default LinkedList;
