function runlength_encode(L) {

    // WRITE YOUR SOLUTION HERE.
    return accumulate(
            (x, ys) => is_null(display_list(ys))
                        ? pair(x, null)
                        : x === head(ys)
                        ? pair(pair(x, 2), tail(ys))
                        : !is_pair(head(ys)) || x !== head(head(ys))
                        ? pair(x, ys)
                        : pair(pair(x, tail(head(ys)) + 1), tail(ys)),
            null,
            L);
}

// runlength_encode(null);
// // returns null

// runlength_encode(list(9));
// // returns list(9)

// runlength_encode(list(6,5,5,9,7,7,5,5,5));
// // returns list(6, [5,2], 9, [7,2], [5,3])

function runlength_decode(R) {

    // WRITE YOUR SOLUTION HERE.
    return is_null(R)
            ? R
            : is_pair(head(R)) && tail(head(R)) !== 0
            ? pair(head(head(R)), 
                    runlength_decode(
                        pair(
                            pair(
                                head(head(R)),
                                tail(head(R)) - 1),
                            tail(R))))
            : is_pair(head(R))
            ? runlength_decode(tail(R))
            : pair(head(R), runlength_decode(tail(R)));
}

// runlength_decode(null);
// // returns null

// runlength_decode(list(9));
// // returns list(9)

// runlength_decode(list(6, pair(5,2), 9, pair(7,2), pair(5,3)));
// // returns list(6,5,5,9,7,7,5,5,5)

// Let L be a list of n integers, where n ≥ 0. The run-length encoding of L is a list R
// such that R has the same elements as L has, except for every consecutive
// two or more identical elements in L, R will have the element pair(x, k),
// where x is the consecutively repeating element in L, and k is the number of times
// x occurs in that consecutive section. For example, the run-length encoding of 
// list(6,5,5,9,7,7,5,5,5) is list(6, [5,2], 9, [7,2], [5,3]) (in list notation).