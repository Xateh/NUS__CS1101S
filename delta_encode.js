function delta_encode(L) {

    // WRITE YOUR SOLUTION HERE.
    function helper(L, prev) {
        return is_null(L)
                ? null
                : pair(head(L) - prev, helper(tail(L), head(L)));
    }
    return is_null(L)
            ? null
            : helper(L, 0);
}

// delta_encode(null);
// // returns null

// delta_encode(list(9));
// // returns list(9)

// delta_encode(list(3,4,6,-2,-2));
// // returns list(3,1,2,-8,0)

function delta_decode(D) {

    // WRITE YOUR SOLUTION HERE.
    function helper(D, prev) {
        return is_null(D)
                ? null
                : pair(head(D) + prev, helper(tail(D), prev + head(D)));
    }
    return is_null(D)
            ? null
            : helper(D, 0);
}

// delta_decode(null);
// // returns null

// delta_decode(list(9));
// // returns list(9)

// delta_decode(list(3,1,2,-8,0));
// // returns list(3,4,6,-2,-2)

// Let L be a list of n integers, where n ≥ 0. The delta encoding of L is a list D 
// of length n, such that the first element of D is the same as the first element of L,
// and each subsequent element of D is the difference of the corresponding element in L
// and its previous element in L. For example, the delta encoding of list(3,4,6,-2,-2)
// is list(3,1,2,-8,0).