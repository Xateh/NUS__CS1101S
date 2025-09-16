/**
 * Write a function called remove_duplicates that takes in a list as its only argument and
 * returns a list with duplicate elements removed. The order of the elements in the returned
 * list does not matter. Use accumulate in your function.
 */
// Surrya's Solution
function remove_duplicates_surrya(xs) {
    return accumulate((x,y) => pair(x, filter(z=> z!==x, y)), null, xs);
}
// Yang Chuan's Solution
function remove_duplicates_yangchuan(lst) {
    
    function check_exists(x, lst) {
        return length(filter(y => y === x, lst)) > 0;
    }
    
    return accumulate((h, t) => check_exists(h, t) ? t : pair(h, t), null, lst);
}
const remove_duplicates = remove_duplicates_yangchuan;
display_list(remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2)));
// Result: list(1, 2, 3, 4), list(4, 3, 1, 2)
remove_duplicates(list("a", "x", "b", "c", "c", "b", "d"));
// Result: list("a", "x", "c", "b", "d")

/**
 * In this question, lists represent sets. Each element of the set appears exactly
 * once in its list representation, and the order does not matter. So the list list(1, 2, 3)
 * represents the same set as the list list(3, 2, 1).
 * In this question, you are supposed to compute all subsets of a give set. Your function
 * subsets takes as argument a list, representing the given set, and needs to return a list of
 * lists, each representing a unique subset of the given set.
 * function subsets(xs) {
 *      ...
 * }
 */

// SOLUTION:
// Yang Chuan's Attempt
function subsets_yangchuan(xs) { // Didn't work but a good try
    return is_null(xs)
            ? list(null)
            : append(subsets_yangchuan(tail(xs)), list(xs));
}
// Gone through in class
function sub(xs) {
    return is_null(xs)
            ? list(null)
            : accumulate(
                (x, y) => append(list(head(x), tail(x)), y),
                null,
                map(x => pair(x, append(x, list(head(xs)))), sub(tail(xs))));
}
const subsets = sub;
// Example call:
display_list(subsets(list(1, 2, 3)));
// Result: list(list(),
// list(1), list(2), list(3),
// list(1,2), list(1,3), list(2,3),
// list(1,2,3))

/**
 * A permutation of a list s is a list with the same elements as s, but in a possibly different order. For example, the list list(3,1,2) is a permutation of list(1,2,3).
 * Write a function permutations that takes a list s as argument and returns a list of all
 * permutations of s.
 */
// Gone through in class
function permutations(s) {
    return is_null(s)
            ? list(null)
            : accumulate(
                (xs, ys) => append(xs, ys),
                null,
                map(
                    x => map(
                        xs => pair(x, xs),
                        permutations(filter(y => y !== x, s))),
                    s
                ));
}
// Example call:
display_list(permutations(list(1, 2, 3)));
// Result: list(list(1,2,3), list(1,3,2),
// list(2,1,3), list(2,3,1),
// list(3,1,2), list(3,2,1))
