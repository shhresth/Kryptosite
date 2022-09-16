function Encrypt(plainText, key) {
    let LowerPlainText = plainText.toLowerCase();
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let result = '';
    for (let i = 0; i < LowerPlainText.length; i++) {
        let letter = LowerPlainText[i];
        if (letter === ' ') {
            result += letter;
            continue;
        }
        let currentStr = alphabets.indexOf(letter);
        let newStr = currentStr + key;
        if (newStr > 25) newStr = newStr - 26;
        if (newStr < 0) newStr = 26 + newStr;
        if (plainText[i] === plainText[i].toUpperCase()) {
            result += alphabets[newStr].toUpperCase();
        } else result += alphabets[newStr];
    }
    return result;
}

function Decrypt(cipherText, key) {
    let LowerCipherText = cipherText.toLowerCase();
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let result = '';
    for (let i = 0; i < LowerCipherText.length; i++) {
        let letter = LowerCipherText[i];
        if (letter === ' ') {
            result += letter;
            continue;
        }
        let currentStr = alphabets.indexOf(letter);
        let newStr = currentStr - key;
        if (newStr > 25) newStr = newStr - 26;
        if (newStr < 0) newStr = 26 + newStr;
        if (cipherText[i] === cipherText[i].toUpperCase()) {
            result += alphabets[newStr].toUpperCase();
        } else result += alphabets[newStr];
    }
    return result;
}

module.exports = Decrypt;
module.exports = Encrypt;
