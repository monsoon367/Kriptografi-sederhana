function caesarCipher(text, shift) {
    let result = "";
    for (let i = 0; i < text.legth; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            if ((code >= 65) && (code <= 90)) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if ((code >= 97) && (code <= 122)) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        result += char
    }
    return result;
}



function caesarCipher(message, shift) {
    let result = "";
    
    for (let i = 0; i < message.length; i++) {
      let char = message[i];
      
      if (char.match(/[a-z]/i)) {
        const code = message.charCodeAt(i);
        
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }
      
      result += char;
    }
    
    return result;
  }



  function caesarCipher(text, shift) {
    const shiftedAlphabet = [...Array(26)].map((_, i) =>
      String.fromCharCode(((i + shift) % 26) + 65)
    );
    
    const result = text.replace(/[a-z]/gi, (char) => {
      const charCode = char.charCodeAt(0);
      const index = charCode >= 97 ? charCode - 97 : charCode - 65;
      
      return shiftedAlphabet[index] || char;
    });
    
    return result;
  }

  const caesarCipher = (str, shift, decrypt = false) => {
    const s = decrypt ? (26 - shift) % 26 : shift;
    const n = s > 0 ? s : 26 + (s % 26);
    return [...str]
      .map((l, i) => {
        const c = str.charCodeAt(i);
        if (c >= 65 && c <= 90)
          return String.fromCharCode(((c - 65 + n) % 26) + 65);
        if (c >= 97 && c <= 122)
          return String.fromCharCode(((c - 97 + n) % 26) + 97);
        return l;
      })
      .join('');
  };
  
  caesarCipher('Hello World!', 23); // 'Ebiil Tloia!'
  caesarCipher('Hello World!', -3); // 'Ebiil Tloia!'
  caesarCipher('Ebiil Tloia!', 23, true); // 'Hello World!'
  caesarCipher('Ebiil Tloia!', -3, true); // 'Hello World!'

  