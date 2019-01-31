function check(change, result){
        if(change === result){
            console.log('Deu certo!');
        } else {
            console.log('Deu pau!');
        }
}

check(window.cipher.encode(5, 'ABCDE'), 'FGHIJ');
check(window.cipher.encode(50, 'Olá Convidado'), 'Mjá Amltgbybm');
check(window.cipher.encode(500, 'menina do céu!'), 'sktotg ju iéa!');
check(window.cipher.encode(1000, 'meuemail@eumesma.COM'), 'yqgqymux@qgyqeym.OAY');
check(window.cipher.encode(-9, 'ABCDE'), 'RSTUV');
check(window.cipher.encode(-90, 'Olá Convidado'), 'Czá Qcbjwrorc');
check(window.cipher.encode(-900, 'menina do céu!'), 'woxsxk ny mée!');
check(window.cipher.encode(-1000, 'meuemail@eumesma.COM'), 'asisaowz@siasgao.QCA');

check(window.cipher.decode(5, 'FGHIJ'), 'ABCDE');
check(window.cipher.decode(50, 'Mjá Amltgbybm'), 'Olá Convidado');
check(window.cipher.decode(500, 'sktotg ju iéa!'), 'menina do céu!');
check(window.cipher.decode(1000, 'yqgqymux@qgyqeym.OAY'), 'meuemail@eumesma.COM');
check(window.cipher.decode(-9, 'RSTUV'), 'ABCDE');
check(window.cipher.decode(-90, 'Czá Qcbjwrorc'), 'Olá Convidado');
check(window.cipher.decode(-900, 'woxsxk ny mée!'), 'menina do céu!');
check(window.cipher.decode(-1000, 'asisaowz@siasgao.QCA'), 'meuemail@eumesma.COM');
