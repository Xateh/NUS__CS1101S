/**
 * Consider the following Source program:
 */

function f1(rune_1, n, rune_2) {
    return n === 0
            ? rune_2
            : f1(rune_1, n - 1, beside(rune_1,stack(blank, rune_2)));
}
show(f1(square, 3, heart));

/** Use the substitution model on runes demonstrated during Lecture L2A in order to manually
 * evaluate the expression f1(square, 3, heart). The evaluation proceeds as demonstrated
 * in L2A. For the primitive rune square, you should draw a solid box ∎ and for the primitive
 * rune blank, you should draw an empty box .
 * Of course as the computation proceeds according to the substitution model, the pictures
 * within your expressions will become more complex. Try to get the proportions right and
 * draw the pictures as large as necessary.
 */


/**
 * Consider the following Source program:
 */

function f2(rune, n) {
    return n === 0
            ? rune
            : stack(beside(blank, f2(rune, n - 1)),
                    square);
}
show(f2(heart, 3));

/**
 * Use the substitution model on runes demonstrated during Lecture L2A in order to manually
 * evaluate the expression f2(heart, 3). The evaluation proceeds as demonstrated in L2A.
 * For the primitive rune square, you should draw a solid box ∎ and for the primitive rune
 * blank, you should draw and empty box .
 * Of course as the computation proceeds according to the substitution model, the pictures
 * within your expressions will become more complex. Try to get the proportions right and
 * draw the pictures as large as necessary.
 */