function make_k_list(k, d) {

    // WRITE YOUR SOLUTION HERE.
    function helper(pos) {
        return pos >= d
                ? 0
                : map(x => helper(pos + 1), enum_list(1, k));
    }
    return d === 0 ? 0 : helper(0);
}
display_list(make_k_list(4,1));

function sum_k_list(klist) {

    // WRITE YOUR SOLUTION HERE.
    return is_list(klist)
            ? accumulate((x, ys) => sum_k_list(x) + ys, 0, klist)
            : klist;
}

// const klistB = list(list(0, 6, 3), list(8, 6, 10), list(5, 1, 25));
// sum_k_list(klistB); // returns 64

function map_k_list(f, klist) {

    // WRITE YOUR SOLUTION HERE.
    return is_list(klist)
            ? map(x => map_k_list(f, x), klist)
            : f(klist);
}

// const klistB = list(list(0, 6, 3), list(8, 6, 10), list(5, 1, 25));
// map_k_list(x => 2 * x, klistB);
//     // returns list(list(0, 12, 6), list(16, 12, 20), list(10, 2, 50))

// A k-list of degree k and depth 0 is just a number.
// A k-list of degree k and depth d > 0 is a list with k elements,
// each of which is a k-list of degree k and depth d - 1.
// The degree k is always a positive integer, 
// and the depth d is always a non-negative integer.