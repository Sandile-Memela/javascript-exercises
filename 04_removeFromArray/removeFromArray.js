const removeFromArray = function(arr, ...str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === str[i]) arr.splice(j, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
