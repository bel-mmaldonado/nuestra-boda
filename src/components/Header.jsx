import React from "react";
import styled from "styled-components"
import img3 from "../resources/img3.jpeg" 

const DivContainer = styled.body`
background-image: url("../resources/img3.jpeg") !important
`;
const Header = () => {
  return (
    <DivContainer>
      <h1>Mati & Lu</h1>
      <h3>Hemos hecho caso a nuestro corazón...</h3>
      <h2>¡Nos casamos!</h2>
    </DivContainer>
 );
};

export default Header;
