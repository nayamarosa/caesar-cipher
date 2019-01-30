window.cipher = {
    encode: function (offPosition, str){
        let strSeparet = str.split('');
        let strAscii = '';
        for(let i = 0; i < strSeparet.length; i++){
            let arrChar = strSeparet[i].charCodeAt(0);
            if (arrChar <= 90 && arrChar >= 65){
                let asciiPosition = ((arrChar - 65 + (offPosition % 26) + 26) % 26)  + 65;
                strAscii += String.fromCharCode(asciiPosition);
            } else if (arrChar <= 122 && arrChar >= 97){
                let asciiPosition = ((arrChar - 97 + (offPosition % 26) + 26 ) % 26) + 97;
                strAscii += String.fromCharCode(asciiPosition);
            } else {
                strAscii += String.fromCharCode(arrChar);
            }
        }
        return strAscii;
    },
    
    decode: function (offPosition, str){
        let strSeparet = str.split('');
        let strAscii = '';
        for(let i = 0; i < strSeparet.length; i++){
            let arrChar = strSeparet[i].charCodeAt(0);
            if (arrChar <= 90 && arrChar >= 65){
                let asciiPosition = ((arrChar - 65 - (offPosition % 26) + 26) % 26)  + 65;
                strAscii += String.fromCharCode(asciiPosition);
            } else if (arrChar <= 122 && arrChar >= 97){
                let asciiPosition = ((arrChar - 97 - (offPosition % 26) + 26 ) % 26) + 97;
                strAscii += String.fromCharCode(asciiPosition);
            } else {
                strAscii += String.fromCharCode(arrChar)
            }
        }
        return strAscii;
    }
     
  };