function cipherStr(str, offPosition){
    let strAscii = '';
    for(let i = 0; i < str.length; i++){
        if (str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65){
            let asciiPosition = ((str.charCodeAt(i) - 65 + offPosition) % 26) + 65;
            strAscii += String.fromCharCode(asciiPosition);
            console.log (strAscii)
        } else if (str.charCodeAt(i) <= 122 && str.charCodeAt(i) >= 97){
            let asciiPosition = ((str.charCodeAt(i) - 97 + offPosition) % 26) + 97;
            strAscii += String.fromCharCode(asciiPosition);
        }
    }
    return strAscii;
}

function decipherStr(str, offPosition){
    let strAscii = '';
    for(let i = 0; i < str.length; i++){
        if (str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65){
            let asciiPosition = ((str.charCodeAt(i) - 65 - (offPosition % 26) + 26) % 26)  + 65;
            strAscii += String.fromCharCode(asciiPosition);
        } else if (str.charCodeAt(i) <= 122 && str.charCodeAt(i) >= 97){
            let asciiPosition = ((str.charCodeAt(i) - 97 - (offPosition % 26) + 26 ) % 26) + 97;
            strAscii += String.fromCharCode(asciiPosition);
        }
    }
    return strAscii;
}



    function encode(str, offPosition){
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
    }
    
    function decode(str, offPosition){
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
     