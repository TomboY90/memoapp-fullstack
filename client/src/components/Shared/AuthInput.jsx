import React from 'react';
import styled from 'styled-components';

const TitleInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 1.25rem;
`;

const AuthInput = ({ name, type, value, onChange }) => {
  return (
    <div>
      <TitleInput 
        name={name}
        type={ type ? type : 'input' }
        placeholder={ type ? 'password' : 'name' }
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  )
}

export default AuthInput;