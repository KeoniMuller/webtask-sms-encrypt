const encrypt = function (plaintext, shiftAmount) {
    let ciphertext = "";
    for (let i = 0; i < plaintext.length; i++) {
        let plainCharacter = plaintext.charCodeAt(i);
        if (plainCharacter >= 97 && plainCharacter <= 122) {
            ciphertext += String.fromCharCode((plainCharacter - 97 + shiftAmount) % 26 + 97);
        } else if (plainCharacter >= 65 && plainCharacter <= 90) {
            ciphertext += String.fromCharCode((plainCharacter - 65 + shiftAmount) % 26 + 65);
        } else {
            ciphertext += String.fromCharCode(plainCharacter);
        }
    }
    return ciphertext;
}

const decrypt = function (ciphertext, shiftAmount) {
    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i++) {
        let cipherCharacter = ciphertext.charCodeAt(i);
        if (cipherCharacter >= 97 && cipherCharacter <= 122) {
            plaintext += String.fromCharCode((cipherCharacter - 97 - shiftAmount + 26) % 26 + 97);
        } else if (cipherCharacter >= 65 && cipherCharacter <= 90) {
            plaintext += String.fromCharCode((cipherCharacter - 65 - shiftAmount + 26) % 26 + 65);
        } else {
            plaintext += String.fromCharCode(cipherCharacter);
        }
    }
    return plaintext;
}


module.exports = {
    encrypt,
    decrypt
}