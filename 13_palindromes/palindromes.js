const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const newStr = str
        .toLowerCase()
        .split("")
        .filter((character) => alphanumerical.includes(character))
        .join("");
    
    const reversedStr = newStr.split("").reverse().join("");

    return newStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
