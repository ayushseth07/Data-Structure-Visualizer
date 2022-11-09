import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Stack from "./Pages/stack";
import BST from "./Pages/BST";
import LinkedList from "./Pages/LinkedList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Queue from "./Pages/Queue";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/queue" element={<Queue />} />
          <Route path="/bst" element={<BST />} />
          <Route path="/linkedlist" element={<LinkedList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
