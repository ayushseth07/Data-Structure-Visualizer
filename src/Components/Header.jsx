import React from "react";
import styled from "styled-components";

const MyHeader = styled.div`
    display:flex;
     justify-content: center;
     align-items:center;
     height:15vh;
  background-color:#FFFFFF;
  border-bottom:2px solid #0B409C;
  h1{
      margin:0;
    
      color:#FF9F29;
     font-family: 'Press Start 2P', cursive;
     font-size:50px;
  }
`

const Header = () =>{

    return <>
     <MyHeader>
         <h1>Data Structure Visualizer</h1>
     </MyHeader>
    </>
}
export default Header;