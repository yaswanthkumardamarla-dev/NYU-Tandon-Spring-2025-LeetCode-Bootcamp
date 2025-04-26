/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0, n = s.length, sign = 1, result = 0;
    
    // Skip whitespaces
    while (i < n && s[i] === ' ') i++;
    
    // Sign detection
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // Parse digits
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0));
        if (result * sign > 2**31 - 1) return 2**31 - 1;
        if (result * sign < -(2**31)) return -(2**31);
        i++;
    }

    return result * sign;
};