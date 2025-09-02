/**
 * Qn 1:
 * Begin by writing a function 'moony_1'
 * that takes an argument 'bottom_right'
 * and produces the given rune
 */
import {beside, stack, circle, blank, ribbon, square, show, beside_frac, stack_frac} from "rune";

// By Unknown ( Update me if it's you :) )
function moony_1(bottom_right) {
    const top = beside(circle, blank);
    const bottom = beside(square, bottom_right);
    return stack(top, bottom);
}
show(moony_1(ribbon));

// Answer Key 
function moony_1(rune) {
    return stack(beside(circle, blank),
                beside(square, rune));

}
show(moony_1(ribbon));

/**
 * Qn 2:
 * Use recursion in a function 'moony_2'
 * to insert n - 1 other circles in the approximately
 * correct location.
 */
 
// By Justin
 function moony_2(n) {
     return n === 1
            ? circle
            : moony_1(moony_2(n-1));
 }
show(moony_2(4));

// Answer Key
function moony_2(n) {
    return n === 1
            ? circle
            : moony_1(moony_2(n - 1));
}
show(moony_2(5));

/**
 * Qn 3:
 * Use the available primititve combinations on runes
 * to even out the rows and columns.
 */

// By Iqbal
function moony(n) {
    //return ...;
    return n < 1 
    ? circle 
    : beside_frac(
        1/n,
        stack_frac(1/n, circle, square),
        stack_frac(1/n, blank, moony(n - 1))
    );
}
show(moony(3));

// Answer Key
function moony_3(n) {
    return n === 1
            ? circle
            : stack_frac(1/n,
                        beside(circle, blank),
                        beside(square, moony_3(n - 1)));
}
show(moony_3(5));

// Answer Key
function moony(n) {
return n === 1
? circle
: stack_frac(1/n,
beside_frac(1/n, circle, blank),
beside_frac(1/n, square, moony(n - 1)));

}
show(moony(5));

/**
 * Qn 4a:
 * Do your solutions give rise to a 
 * recursive or iterative processes?
 * 
 * Ans:
 * Recursive, there were deferred operations.
 */
 
/**
 * Qn 4b:
 * Characterize the resource consumption of 'moony'
 * using orders of growth notation.
 * Be clear about what you consider the "size"
 * of the given problem.
 * 
 * Ans:
 * Time Complexity
 * O(2^n), O(n^2), O(n) as there are at most n calls of
 * moony when input is n
 * Omega(1), Omega(n) as there are at least n calls of
 * moony when input is n
 * -> Theta(n) since Big-O and Big-Omega
 * has the same growth function of n
 * 
 * Space Complexity
 * O(n) as there are at most kn deferred operations
 * Omega(n) as there are at least kn deferred operations
 * -> Theta(n) since Big-O and Big-Omega has
 * the same growth function
 */
 
/**
 * Qn 4c:
 * What assumptions are you making on
 * the resource consumption of primitive runes
 * and of primitive operations on runes?
 * 
 * Ans:
 * 1) operations are all O(1) time ie constant time
 * 2) runes all take O(1) space ie constant space
 */