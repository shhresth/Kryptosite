function encryptRailFence(text, key) {
    let rail = [];
    for (let i = 0; i < key; i++) {
        rail.push([]);
    }
    let dir_down = false;
    let row = 0;
    for (let i = 0; i < text.length; i++) {
        if (row == 0 || row == key - 1) {
            dir_down = !dir_down;
        }
        rail[row].push(text[i]);
        dir_down ? row++ : row--;
    }
    let result = '';
    for (let i = 0; i < key; i++) {
        result += rail[i].join('');
    }
    return result;
}


function decryptRailFence(cipher, key) {
    let rail = [];
    for (let i = 0; i < key; i++) {
        rail.push([]);
    }
    let dir_down;
    let row = 0;
    for (let i = 0; i < cipher.length; i++) {
        if (row == 0) {
            dir_down = true;
        }
        if (row == key - 1) {
            dir_down = false;
        }
        rail[row].push('*');
        dir_down ? row++ : row--;
    }
    let index = 0;
    for (let i = 0; i < key; i++) {
        for (let j = 0; j < rail[i].length; j++) {
            if (rail[i][j] == '*' && index < cipher.length) {
                rail[i][j] = cipher[index++];
            }
        }
    }
    let result = '';
    row = 0;
    for (let i = 0; i < cipher.length; i++) {
        if (row == 0) {
            dir_down = true;
        }
        if (row == key - 1) {
            dir_down = false;
        }
        if (rail[row][i] != '*') {
            result += rail[row][i];
        }
        dir_down ? row++ : row--;
    }
    return result;
}


module.exports = encryptRailFence;
module.exports = decryptRailFence;