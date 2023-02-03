const palindromes = function (palindrome) {
    palindrome = palindrome.replace(/[^a-z]/gi, '').toLowerCase();
    let output = '';
    for (let i = palindrome.length; i >= 0; i--) {
        output += palindrome.charAt(i);
    }
    return output === palindrome;
};

// Do not edit below this line
module.exports = palindromes;
