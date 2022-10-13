import React, { useState } from "react";
import { BinarySearchTree, useBinarySearchTree } from "react-tree-vis";
import Smallbkocks from "../Components/smallbkocks";
import "../css/BST.css";
class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}
const BST = () => {
  const { ref } = useBinarySearchTree();
  const [inOrder, setInOrder] = useState([]);
  const [arr, setArr] = useState("");
  const [tree, setTree] = useState([]);
  const handleSubmit = () => {
    let temp = arr.split(",").map((ele) => {
      return parseInt(ele);
    });
    temp.sort();
    // console.log(temp);
    setArr("");
    setInOrder(temp);
  };
  const buildTree = (array, s = 0, e = array.length - 1) => {
    if (s > e) return null;
    var mid = Math.floor((s + e) / 2);
    let root = new Node(array[mid]);
    root.left = buildTree(array, s, mid - 1);
    root.right = buildTree(array, mid + 1, e);
    return root;
  };
  const preOrder = (root) => {
    if (!root) return [];
    var result = [];
    var stack = [root];

    while (stack.length) {
      var node = stack.pop();
      result.push(node.data);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
    return result;
  };
  const CreateBST = () => {
    let root = buildTree(inOrder);
    let arr = preOrder(root);
    setTree(arr);
  };
  return (
    <>
      <h2>Binary Search Tree</h2>
      <div className="BSTmain">
        <div className="BSTinfo">
          <p className="BSTdes">
            A binary Search Tree is a node-based binary tree data structure
            which has the following properties
            <ul>
              <li>
                The right subtree of a node contains only nodes with keys
                greater than the node’s key.
              </li>
              <li>
                The left and right subtree each must also be a binary search
                tree.
              </li>
              <li>There must be no duplicate nodes.</li>
            </ul>
          </p>
        </div>
        <div className="userInput">
          <div className="bstInput">
            <input
              type="text"
              value={arr}
              onChange={(e) => {
                setArr(e.target.value);
              }}
              placeholder="Enter values of nodes seperated by commas"
            />
            <button onClick={handleSubmit}>Create Inorder</button>
          </div>
          <div className="preO">
            {inOrder.length > 0 ? (
              <h3>The inorder traversal of the tree would be -: </h3>
            ) : (
              <></>
            )}
            <div className="after">
              {inOrder.map((ele, index) => {
                return <Smallbkocks val={ele} key={index} />;
              })}
            </div>
          </div>
          <div>
            {inOrder.length > 0 ? (
              <p className="small">Create BST from this in-order traversal</p>
            ) : (
              <></>
            )}
          </div>
          <div>
            {inOrder.length > 0 ? (
              <button onClick={CreateBST} className="createBST">
                Create BST
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <BinarySearchTree data={tree} ref={ref} />
    </>
  );
};

export default BST;
