import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  top: 0px;
  z-index: 5;

  background-color: #2a59db;
  color: white;
  border-bottom: 1px solid #4266ca;
  box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20);

  font-size: 2.5rem;
  font-family: 'Baloo', cursive;
`

const Header = () => {
  return (
    <Wrapper>
      <h2>memo</h2>
    </Wrapper>
  )
}

export default Header;