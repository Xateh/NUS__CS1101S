function eval_poly(poly) {

    // WRITE YOUR SOLUTION HERE.
    return x => accumulate((s, ys) => head(s) * math_pow(x, tail(s)) + ys,
                            0,
                            poly);
}

// const poly = list(pair(2, 0), pair(3, 2), pair(-5, 3), pair(8, 6));
// const p = eval_poly(poly);
// p(2);  // returns 486 (= 2 + 3*(2)^2 - 5*(2)^3 + 8*(2)^6)

// const q = eval_poly(null);
// q(8);  // returns 0

function add_poly(poly1, poly2) {
    if (is_null(poly1)) {

        // WRITE YOUR SOLUTION HERE.
        return poly2;

    } else if (is_null(poly2)) {

        // WRITE YOUR SOLUTION HERE.
        return poly1;

    } else {
        const coeff1 = head(head(poly1));
        const coeff2 = head(head(poly2));
        const exp1 = tail(head(poly1));
        const exp2 = tail(head(poly2));

        if (exp1 === exp2) {

            // WRITE YOUR SOLUTION HERE.
            return coeff1 + coeff2 === 0
                    ? add_poly(tail(poly1), tail(poly2))
                    : pair(pair(coeff1 + coeff2, exp1),
                        add_poly(tail(poly1), tail(poly2)));

        } else if (exp1 < exp2) {

            // WRITE YOUR SOLUTION HERE.
            return pair(pair(coeff1, exp1),
                        add_poly(tail(poly1), poly2));

        } else {

            // WRITE YOUR SOLUTION HERE.
            return pair(pair(coeff2, exp2),
                        add_poly(poly1, tail(poly2)));
        }
    }
}
const poly1 = list(pair(2, 0), pair(3, 2), pair(-5, 3), pair(8, 6));
const poly2 = list(pair(1, 1), pair(4, 2), pair(5, 3), pair(9, 5));
display_list(add_poly(poly1, poly2));

// const poly1 = list(pair(2, 0), pair(3, 2), pair(-5, 3), pair(8, 6));
// const poly2 = list(pair(1, 1), pair(4, 2), pair(5, 3), pair(9, 5));
// add_poly(poly1, poly2);
// // returns list([2, 0], [1, 1], [7, 2], [9, 5], [8, 6])

function multiply_poly(poly1, poly2) {

    // WRITE YOUR SOLUTION HERE.
    return accumulate((p, ys) => add_poly(
                                    map(x => pair(head(p) * head(x), 
                                                tail(p) + tail(x)),
                                        poly1),
                                    ys),
                        null,
                        poly2);
}

// const poly1 = list(pair(1, 0), pair(3, 2), pair(5, 3));
// const poly2 = list(pair(2, 1), pair(7, 2));
// multiply_poly(poly1, poly2);
// // returns list([2, 1], [7, 2], [6, 3], [31, 4], [35, 5])


// Given a polynomial of x,

// p(x) = c1 * x ^ e1  +  c2 * x ^ e2  + ... +  cn * x ^ en
//       (where the symbol ^ denotes the exponentiation operation)

// we represent it in Source as list(pair(c1, e1), pair(c2, e2), ... , pair(cn, en)),
// where each ci must be non-zero,
// and each ei must be a non-negative integer, and
// e1 < e2 < ... < en.

// For example, the polynomial

// p(x) = 2  +  3 * x^2  -  5 * x^3  +  8 * x^6

// is represented in Source as list(pair(2, 0), pair(3, 2), pair(-5, 3), pair(8, 6)).

// Consequently, the polynomial p(x) = 0 is represented as null.