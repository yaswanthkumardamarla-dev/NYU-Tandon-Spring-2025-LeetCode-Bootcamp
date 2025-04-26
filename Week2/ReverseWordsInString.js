/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(" ");
};

// Step | Example | Result
// trim() | "  hello world  " → "hello world" | remove extra spaces at ends
// split(/\s+/) | "hello world" → ["hello", "world"] | split by 1 or more spaces
// reverse() | ["world", "hello"] | reverse words
// join(" ") | "world hello" | join words with single space