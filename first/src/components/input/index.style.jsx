import styled from 'styled-components';

export const Input = styled.input`
  grid-area: inp;
  width: 180px;
  height: 60px;
  border: none;
  outline: none;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 3px 25px rgba(22, 22, 22, 0.5);
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 0px 28px; 

  &:placeholder {
    color: #bdbdbd;
    font-weight: 400;
    opacity: 0.3;
  }
`;