/**
 * Write a function called remove_duplicates that takes in a list as its only argument and
 * returns a list with duplicate elements removed. The order of the elements in the returned
 * list does not matter. Use accumulate in your function.
 */
function remove_duplicates(lst) {
    return accumulate(
                (x, xs) =>
                    is_null(member(x, xs))
                        ? pair(x, xs)
                        : xs,
                null,
                lst);
}
remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));
// Result: list(4, 3, 1, 2)
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

// SOLUTION 1:
function subsets(xs) {
    if (is_null(xs)) {
        return list(null);
    } else {
        const subsets_rest = subsets(tail(xs));
        const x = head(xs);
        const has_x = map(s =>pair(x, s), subsets_rest);
        return append(subsets_rest, has_x);
    }
}
// SOLUTION 2:
function subsets_2(xs) {
return accumulate(
        (x, ss) => append(ss, map(s => pair(x, s), ss)),
        list(null),
        xs);
}
// Example call:
subsets(list(1, 2, 3));
// Result: list(list(),
// list(1), list(2), list(3),
// list(1,2), list(1,3), list(2,3),
// list(1,2,3))

/**
 * A permutation of a list s is a list with the same elements as s, but in a possibly different order. For example, the list list(3,1,2) is a permutation of list(1,2,3).
 * Write a function permutations that takes a list s as argument and returns a list of all
 * permutations of s.
 */
function permutations(s) {
    return is_null(s)
            ? list(null)
            : accumulate(append, null,
                        map(x => map(p => pair(x, p),
                                    permutations(remove(x, s))),
                            s));
}
// Example call:
permutations(list(1, 2, 3));
// Result: list(list(1,2,3), list(1,3,2),
// list(2,1,3), list(2,3,1),
// list(3,1,2), list(3,2,1))
