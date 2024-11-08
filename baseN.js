function search_array(A, x) {
    const len = array_length(A);
    let i = 0;
    while (i < len && A[i] !== x) {
        i = i + 1;
    }
    return i < len ? i : -1;
}


function baseN_to_value(X) {

    const DIGIT_SYMBOLS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                           "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
                           "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
                           "U", "V", "W", "X", "Y", "Z"];

    // WRITE YOUR SOLUTION HERE.
    
    return head(
            accumulate(
                (x, ys) => pair(
                            search_array(DIGIT_SYMBOLS, x)
                            * math_pow(head(X), tail(ys))
                            + head(ys),
                            tail(ys) + 1),
                pair(0, 0),
                tail(X)));
}

// const x = pair(16, list("8", "E", "A", "3", "F"));
// baseN_to_value(x); // returns 584255

// const y = pair(10, list("6", "9", "3", "2", "1", "8", "0"));
// baseN_to_value(y); // returns 6932180

// const z = pair(2, list("1", "1", "0", "0", "1", "0", "1", "0", "1"));
// baseN_to_value(z); // returns 405

// const w = pair(36, list("2", "A", "8", "Z"));
// baseN_to_value(w); // returns 106595

function value_to_baseN(N, x) {

    const DIGIT_SYMBOLS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                           "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
                           "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
                           "U", "V", "W", "X", "Y", "Z"];

    // WRITE YOUR SOLUTION HERE.
    
    function helper(v, acc) {
        return v === 0
                ? acc
                : helper(
                    math_floor(v / N),
                    pair(DIGIT_SYMBOLS[v % N],acc));
    }
    
    return x === 0
            ? pair(N, list(DIGIT_SYMBOLS[0]))
            : pair(N, helper(x, null));
}

// value_to_baseN(16, 584255);
// // returns [16, list("8", "E", "A", "3", "F")]

// value_to_baseN(10, 6932180);
// // returns [10, list("6", "9", "3", "2", "1", "8", "0")]

// value_to_baseN(2, 405);
// // returns [2, list("1", "1", "0", "0", "1", "0", "1", "0", "1")]

// value_to_baseN(36, 106595);
// // returns [36, list("2", "A", "8", "Z")]


// The decimal numeral system that we are familiar with, is a positional numeral system
// that represents numbers using a base of 10 (ten). The representation of a
// non-negative integer number in decimal is a decimal numeral, whose each digit
// uses one of the 10 symbols "0"–"9" to represent values 0 to 9.


// A base-N numeral is the representation of a non-negative integer number in
// a base of N (where 2 ≤ N ≤ 36), where the digits use the symbols "0"–"9" and "A"–"Z"
// to represent values from 0 to 9 and 10 to 35, respectively.


// Here, we will represent a base-N numeral X as a pair whose head is the base N and
// whose tail is a list of the digits of X, arranged from the most significant digit
// to the least significant digit. Each digit is one of the single-character
// strings "0"–"9" and "A"–"Z". For example, the base-16 numeral "8EA3F" is represented
// this way:

// const X = pair(16, list("8", "E", "A", "3", "F"));

// The base-16 numeral "8EA3F" represents the value 584255.