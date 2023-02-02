const repeatString = function(word, count) {
    if (count === 0) return '';
    else if (count < 0) return 'ERROR';
    else {
        let output = '';
        for (let i = 0; i < count; i++) {
            output += word;
        }
        return output;
    }
};

// Do not edit below this line
module.exports = repeatString;
