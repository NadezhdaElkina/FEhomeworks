import styled, { css } from 'styled-components';

const buttonBaseStyles = css`
  width: 90px;
  height: 60px;
  border-radius: 10px;
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  border: none;
  outline: none;
  box-shadow: 0 2px 25px rgba(22, 22, 22, 0.6);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const AddButton = styled.button`
  ${buttonBaseStyles}
  background-color: #c68dff;
  &:hover {
    background-color: #d0a2fe;
    box-shadow: 0 2px 25px rgba(22, 22, 22, 0.7);
  }
  &:active {
    background-color: #be7efe;
    box-shadow: 0 3px 25px rgba(22, 22, 22, 0.4);
  }

`;

export const ClearButton = styled.button`
  ${buttonBaseStyles}
  background-color: #cce858;
  &:hover {
    background-color: #d7f26d;
    box-shadow: 0 2px 25px rgba(22, 22, 22, 0.7);
  }
  &:active {
    background-color: #c1de4f;
    box-shadow: 0 3px 25px rgba(22, 22, 22, 0.4);
  }
`;









// import styled from 'styled-components';

// export const AddButton = styled.button`
//    width: 90px;
//    height: 60px;
//    grid-area: btn;
//    background-color: #c68dff;
//    border-radius: 10px;
//    color: #000000;
//    font-size: 16px;
//    font-weight: 500;
//    border: none;
//    outline: none;
//    box-shadow: 0 2px 25px rgba(22, 22, 22, 0.5);
// `;

// export const ClearButton = styled.button`
//    width: 90px;
//    height: 60px;
//    grid-area: btn2;
//    background-color: #cce858;
//    border-radius: 10px;
//    color: #000000;
//    font-size: 16px;
//    font-weight: 500;
//    border: none;
//    outline: none;
//    box-shadow: 0 2px 25px rgba(22, 22, 22, 0.5);
// `;