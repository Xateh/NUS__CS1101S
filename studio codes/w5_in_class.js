/**
 * The function list_ref can be applied to a list xs and a number n, and returns the n-th
 * element of the list, starting counting at 0. So list_ref(list(1, 2, 3), 2) evaluates to
 * 3. The position of an element in the list is called its rank; we say that the number 3 has
 * rank 2 in the list. Write a Source function called every_second that takes a list as its
 * only argument and returns a list containing all the elements of odd rank (i.e. every second
 * element) from the input list.
 * 
 * Example call:
 * every_second(list("a", "x", "b", "y", "c", "z", "d"));
 * // Value: ["x", ["y", ["z", null]]]
 */



// The following is a solution that gives rise to recursive processes.
function every_second_rec(items) {
    return (is_null(items) || is_null(tail(items)))
            ? null
            : pair(head(tail(items)),
                    every_second_rec(tail(tail(items))));
}
draw_data(every_second_rec(list("a", "x", "b", "y", "c", "z", "d")));
// list(’x’, ’y’, ’z’);

// The following is an alternative solution that gives rise to iterative processes.
function every_second_iter(items) {
    function helper(xs, result) {
        return is_null(xs) || is_null(tail(xs))
                ? reverse(result)
                : helper(tail(tail(xs)), pair(head(tail(xs)), result));
    }
    return helper(items, null);
}
draw_data(every_second_iter(list("a", "x", "b", "y", "c", "z", "d")));
// list(’x’, ’y’, ’z’);

/**
 * Write a Source §2 function called sums that takes a list of numbers as its only argument
 * and returns a list of numbers, containing two elements: the first is the sum of all even
 * ranked numbers in the input list (ranks 0, 2, 4 etc), whereras the second element is the
 * sum of all odd-ranked elements in the input list (ranks 1, 3, 5 etc).
 * 
 * Example call:
 * sums(list(1, 2, 3, 4, 5));
 * // Value: [9, [6, null]]
 * We say that sums has the following type:
 * sums: list of Number → list of Number
 */

// The following is an solution that gives rise to recursive processes.
function sums_rec_1(xs) {
    if (is_null(xs)) {
        return list(0, 0);
    } else if (is_null(tail(xs))) {
        return list(head(xs), 0);
    } else {
        const wish = sums_rec(tail(tail(xs)));
        return list(head(xs) + head(wish), head(tail(xs)) + head(tail(wish)));
    }
}
function sums_rec(xs) {
    return is_null(xs)
            ? list(0, 0)
            : is_null(tail(xs))
            ? list(head(xs), 0)
            : list(
                head(xs) + head(wish),
                head(tail(xs)) + head(tail(
                                        sums_rec(tail(tail(xs)))
                                    ))
            );
}
draw_data(sums_rec(list(1, 2, 3, 4, 5, 6, 7)));

// The following is an alternative solution that gives rise to iterative processes.
function sums_iter_1(items) {
    function helper(xs, even_rank, even_sum, odd_sum) {
        return is_null(xs)
                ? list(even_sum, odd_sum)
                : even_rank
                ? helper(tail(xs), false, even_sum + head(xs), odd_sum)
                : helper(tail(xs), true, even_sum, odd_sum + head(xs));
    }
    return helper(items, true, 0, 0);
}
function sums_iter(items) { // items = list(i_0, i_1, i_2, i_3, i_4, i_5, ...)
    return is_null(items) || is_null(tail(items)) || is_null(tail(tail(items))) // length(items) < 3
            ? items
            : is_null(tail(tail(tail(items)))) // length(items) === 3
            ? list(list_ref(items, 0) + list_ref(items, 2), // list(i_0 + i_2, i_1)
                    list_ref(items, 1))
            : sums_iter(
                pair( // list(i_0 + i_2, i_1 + i_3, ...)
                    list_ref(items, 0) + list_ref(items, 2),
                    pair(
                        list_ref(items, 1) + list_ref(items, 3),
                        tail(tail(tail(tail(items))))
                    )
            ));
}

draw_data(sums_iter(list(1, 2, 3, 4, 5, 6)));
