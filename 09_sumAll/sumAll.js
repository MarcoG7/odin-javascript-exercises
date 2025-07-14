const sumAll = function(a, b) {

    if (a < 0 || b < 0) { return "ERROR"; }
    if (typeof a !== "number" || typeof b !== "number") { return "ERROR"; }
    if (Math.floor(a) != a || Math.floor(b) != b) { return "ERROR"; }

    const nb_termes = Math.abs(b - a) + 1;
    return (nb_termes * (b + a)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
