import React, { useState } from 'react'
import { MdEnhancedEncryption } from 'react-icons/md';

export default function Input() {

  const [inputStr,setInputStr] = useState("");

  function caesar(str, n = 3) {

    if (n < 0)
      return caesar(str, n + 26);
    var result = '';
    for (var i = 0; i < str.length; i++) {
      var c = str[i];
      if (c.match(/[a-z]/i)) {
        var code = str.charCodeAt(i);
        if ((code >= 65) && (code <= 90))
          c = String.fromCharCode(((code - 65 + n) % 26) + 65);
        else if ((code >= 97) && (code <= 122))
          c = String.fromCharCode(((code - 97 + n) % 26) + 97);
      }
      result += c;
      console.log(result);
    }
    
    return <p>{result}</p>
  };

function showResult(inputStr){
  caesar(inputStr);
}
function handleFormSubmit(e){
  e.preventDefault();
}

  return (
    <form onSubmit={handleFormSubmit}>
        <select id="encryption_methods" name="encryption_methods">
              <option value="ceaser" defaultValue={'ceaser'}>Ceaser cipher</option>
              <option value="columnar">columnar cipher</option>
              <option value="row">rail fence</option>
        </select>
       
        <input type="text" name='number-shift' id='num-shift' placeholder='Number shift by..' />
      <input type="text" name="plain-text" id="plain-text" placeholder='Enter your message here...' value={inputStr} onChange={(e) => setInputStr(e.target.value)}/>   
        
          <button id='btn-submit' type='submit' onClick={showResult}><MdEnhancedEncryption />Encrypt</button>
      <p>{inputStr}</p>
    </form>    
  )
}
