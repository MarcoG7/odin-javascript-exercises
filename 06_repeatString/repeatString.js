const repeatString = function(string, num) {
    if (num < 0) { return "ERROR"; }
    let res_string = "";
    for (let i = 0; i < num; i++) {
        res_string += string;
    }
    return res_string;
};

// Do not edit below this line
module.exports = repeatString;
