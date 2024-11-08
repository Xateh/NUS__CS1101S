function route_distance(mat, route) {

    // WRITE YOUR SOLUTION HERE.
    function helper(route, acc) {
        return is_null(tail(route))
                ? acc
                : helper(
                    tail(route), 
                    mat[head(route)][head(tail(route))] + acc
                );
    }
    return helper(route, 0);
}

// const mat = [[0, 1, 2, 3],
//              [2, 0, 5, 6],
//              [3, 3, 0, 4],
//              [4, 4, 5, 0]];
// const route = list(2, 1, 3, 1);
// route_distance(mat, route); // returns 13 (= 3 + 6 + 4)

function shortest_paper_route(n, mat, start) {

    // You can keep, modify or remove the permutations function.
    function permutations(ys) {
        return is_null(ys)
            ? list(null)
            : accumulate(append, null,
                map(x => map(p => pair(x, p),
                             permutations(remove(x, ys))),
                    ys));
    }

    // WRITE YOUR SOLUTION HERE.
    return accumulate(
                (r, ys) => 
                    tail(ys) === 0
                    || route_distance(mat, map(x => x, r)) < tail(ys)
                    ? pair(r, route_distance(mat, map(x => x, r)))
                    : ys,
                pair(null, 0),
                map(
                    x => append(x, list(start)),
                    filter(
                        x => head(x) === start,
                        permutations(enum_list(0, n - 1))
                    )
                )
            );
}

const mat = [[0, 1, 2, 3],
             [2, 0, 5, 6],
             [3, 3, 0, 4],
             [4, 4, 5, 0]];
const n = array_length(mat);
shortest_paper_route(n, mat, 1);

// A residential neighborhood has n houses, numbered from 0 to n - 1, and n is at least 2.

// A route is a list of house numbers that one visits in that order.
// For example, if one is to take the route list(2,4,1),
// one will travel from House 2 to House 4, and then from House 4 to House 1.
// A route must have at least two house numbers (i.e. length of at least 2),
// and consecutive pair of houses in the route are not allowed to be the same house.

// The distance of a route is the sum of the distances between 
// every consecutive pair of houses in the route. The distance from House i to House j
// can be found at the element mat[i][j] of a distance matrix mat, which is represented as a n-by-n 2D array.

// Note that mat[i][j] can be different from mat[j][i] for i ≠ j, and they are all positive.
// Also, mat[i][i] is zero for all i = 0 ... n-1.