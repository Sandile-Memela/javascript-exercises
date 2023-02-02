const reverseString = function(word) {
    let output = '';
    for (let i = word.length; i >= 0; i--) {
        output += word.charAt(i);
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
