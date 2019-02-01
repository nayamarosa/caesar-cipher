window.cipher = {
    clickEncode: function(){
        let encodeText = document.getElementById('textarea').value; 
        let offsetSize = document.getElementById('offset').value;
        let result = window.cipher.encode(offsetSize,encodeText);  
        document.getElementById('resultcipher').innerHTML = result;
        let textarea = document.getElementById('textarea');
        let offset = document.getElementById('offset');
        if(encodeText === '' && offsetSize === ''){
            textarea.classList.add('error');
            offset.classList.add('error');
        } else if (encodeText === ''){
            textarea.classList.add('error');
        } else if (offsetSize === ''){  
            offset.classList.add('error');
        } else {
            let modal = document.getElementById('modal-rtn');
            modal.style.display = 'block';
            textarea.classList.remove('error');
            offset.classList.remove('error');
        }
    },
    
    clickDecode: function(){
        let decodeText = document.getElementById('textarea').value; 
        let offsetSize = document.getElementById('offset').value;
        let result = window.cipher.decode(offsetSize,decodeText);  
        document.getElementById('resultcipher').innerHTML = result;
        let textarea = document.getElementById('textarea');
        let offset = document.getElementById('offset');
        if(decodeText === '' && offsetSize === ''){
            textarea.classList.add('error');
            offset.classList.add('error');
        } else if (decodeText === ''){
            textarea.classList.add('error');
        } else if (offsetSize === ''){  
            offset.classList.add('error');
        } else {
            let modal = document.getElementById('modal-rtn');
            modal.style.display = 'block';
            textarea.classList.remove('error');
            offset.classList.remove('error');
        }
    },
    
    modalOut: function(){
        let modal = document.getElementById('modal-rtn');
        let textarea = document.getElementById('textarea');
        let offset = document.getElementById('offset');
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                textarea.value = '';
                offset.value = '';
            }
        }
    },
    
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

cipher.modalOut();