function split(S) {

    // WRITE YOUR SOLUTION HERE.
    let i = 0;
    const arr = [];
    
    while (!is_undefined(char_at(S, i))) {
        arr[i] = char_at(S, i);
        i = i + 1;
    }
    
    return arr;
}

// split("");  // returns []

// split("x");  // returns ["x"]

// split("hello");  // returns ["h", "e", "l", "l", "o"]

function num_characters_from(A, B) {

    // WRITE YOUR SOLUTION HERE.
    const len_A = array_length(A);
    const len_B = array_length(B);
    let count = 0;
    
    for (let a = 0; a < len_A; a = a + 1) {
        for (let b = 0; b < len_B; b = b + 1) {
            if (A[a] === B[b]) {
                count = count + 1;
                break;
            }
        }
    }
    
    return count;
}

// num_characters_from(["h", "e", "l", "l", "o"], []);
// // returns 0

// num_characters_from([], ["a", "b", "c"]);
// // returns 0

// num_characters_from(["h", "e", "l", "l", "o"], ["e", "h", "l", "o"]);
// // returns 5

// num_characters_from(["h", "e", "l", "l", "o"], ["a", "h", "l", "o"]);
// // returns 4  ("e" is not in B)

// num_characters_from(["x", "y", "z", "w"], ["x", "y", "z"]);
// // returns 3  ("w" is not in B)

function num_unique(A) {

    // WRITE YOUR SOLUTION HERE.
    const len_A = array_length(A);
    const unique = [];
    
    let dupe = false;
    for (let a = 0; a < len_A; a = a + 1) {
        dupe = false;
        for (let u = 0; u < array_length(unique); u = u + 1) {
            if (A[a] === unique[u]) {
                dupe = true;
                break;
            }
        }
        
        if (!dupe) {
            unique[array_length(unique)] = A[a];
        }
    }
    
    return array_length(unique);
}

// num_unique([]);  // returns 0

// num_unique(["abc", "abc", "abc", "abc"]);  // returns 1

// num_unique(["o", "c", "c", "u", "r", "r", "e", "n", "c", "e"]);
// // returns 6

// num_unique(["e", "x", "t", "r", "a", "o", "r", "d", "i", "n", "a", "r", "y"]);
// // returns 10

// Write a function split that takes as argument a string S and returns an array of
// one-character strings that contain the characters of S in the order in which they
// appear in S.


// Hint: The primitive function char_at may be helpful.