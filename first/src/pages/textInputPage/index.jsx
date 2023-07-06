import React, { useState } from 'react';
import { MainWrapper } from './index.style';
import { Content } from '../../components/content/index.style';
import { InputWrapper } from '../textInputPage/index.style';
import { Input } from '../../components/input/index.style';
import { AddButton } from '../../components/button/index.style';
import { ClearButton } from '../../components/button/index.style';
import { Header } from '../../components/header/index.style';



export function TextInput() {
  const [text, setText] = useState({ inputText: '', displayText: '' });

  const handleInputChange = (event) => {
    setText((prevState) => ({ ...prevState, inputText: event.target.value }));
  };

  const handleAddText = () => {
    const { inputText, displayText } = text;
    if (inputText.trim() !== '') {
      setText({
        inputText: '',
        displayText: displayText !== '' ? `${displayText}-${inputText}` : inputText,
      });
    }
  };

  const handleClearText = () => {
    setText({ inputText: '', displayText: ''});
  };

  return (
    <MainWrapper>
      <Header>Print something below</Header>
      <InputWrapper>
      <AddButton onClick={handleAddText}>Add</AddButton>
      <Input type="text" value={text.inputText} onChange={handleInputChange} placeholder="Print here"/>
      <ClearButton onClick={handleClearText}>Clear</ClearButton>
      </InputWrapper>
      <Content>{text.displayText}</Content>
    </MainWrapper>
  );
}

// не поняла, нужно ли, чтобы при нажатии clear очищался 
// только блок с текстом или инпут тоже должен очищаться.
//  вариант, где инпут не очищается:


// export function TextInput() {
//   const [inputText, setInputText] = useState('');
//   const [textList, setTextList] = useState([]);

//   const handleInputChange = (event) => {
//     setInputText(event.target.value);
//   };

//   const handleAddText = () => {
//     if (inputText.trim() !== '') {
//       setTextList((prevTextList) => [...prevTextList, inputText]);
//       setInputText('');
//     }
//   };

//   const handleClearText = () => {
//     setTextList([]);
//   };

//   return (
//     <div>
//       <input type="text" value={inputText} onChange={handleInputChange}/>
//       <button onClick={handleAddText}>Add</button>
//       <button onClick={handleClearText}>Clear</button>
//       <div>
//         {textList.map((text, index) => (
//           <span key={index}>{text}{index !== textList.length - 1 && '-'}</span>
//         ))}
//       </div>
//     </div>
//   );
// }
