const reverseString = function(string) {
    const str_len = string.length;
    let res_str = "";
    for (let i = str_len-1; i >= 0; i--) {
        res_str += string[i];
    }
    return res_str;
};

// Do not edit below this line
module.exports = reverseString;
