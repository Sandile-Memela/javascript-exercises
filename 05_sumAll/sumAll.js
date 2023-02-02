const sumAll = function(begin, end) {
    let sum = 0;
    if (begin < 0 || end < 0) {
        return "ERROR";
    } else if (typeof begin != "number" || typeof end != "number")  {
        return "ERROR";
    } else if (begin > end) {
        hold = begin;
        begin = end;
        end = hold;
    }
    for (let i = begin; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
