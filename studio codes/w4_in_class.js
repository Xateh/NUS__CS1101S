/**
 * In this in-class sheet, we will refer to the notation and definitions specified in the studio S4 sheet.
 * We indicate a function f can be applied to a Number and will return another Number with the
 * following notation:
 * 
 * f ∶ Number → Number
 * 
 * We call the type of this function Number-Transformation:
 * 
 * Number-Transformation ∶= Number → Number
 * 
 * and thus we can also say
 * 
 * f ∶ Number-Transformation
 */

/**
 * As we have seen in question 3 of the studio sheet, the function compose takes as argu-
 * ments two functions of type Number-Transformation, and returns another such function.
 * 
 * We indicate this with the notation:
 * 
 * compose ∶ (Number-Transformation, Number-Transformation) → Number-Transformation
 * 
 * Just as squaring a number multiplies the number by itself, applying thrice to a function
 * composes the function three times. That is, (thrice(f))(n) will return the same number
 * as f(f(f(n))):
 */

function thrice(f) {
    return compose(compose(f, f), f);
}

/**
 * What is the result of evaluating thrice(math_sqrt)(256);?
 * 
 * Answer: 2
 */

/**
 * As used above, thrice is of type Number-Transformation → Number-Transformation, which, upon
 * expansion, is:
 * 
 * (Number → Number) → (Number → Number)
 * 
 * That is, it takes as input a function from numbers to numbers and returns the same kind of function.
 * (You may call thrice a Number-Transformation-Transformation.) But thrice will actually work
 * on other kinds of transformations, not just Number-Transformations: It is enough for the input
 * function to have a type of the form T → T, where T may be any type. So more generally, we can write
 * 
 * thrice ∶ (T → T) → (T → T)
 * 
 * Composition, like multiplication, may be iterated. Consider the following:
 */

function repeated(f, n) {
    return n === 0
            ? x => x
            : compose(f, repeated(f, n - 1));
}
(repeated(math_sin, 5))(3.1);
// Value: 0.041532801333692235
math_sin(math_sin(math_sin(math_sin(math_sin(3.1)))));
// Value: 0.041532801333692235

/**
 * We can write
 * 
 * repeated ∶ ((T → T), Number) → (T → T)
 * 
 * Implement thrice using repeated.
 */

// Anwer Key
thrice = f => repeated(f, 3);

/**
 * The type of thrice is of the form (T′ → T′) (where T′ happens to equal (T → T)), so we can
 * legitimately use thrice as an input to thrice!
 * For what value of n will thrice(thrice)(f)(0) return the same value as repeated(f,
 * n)(x)? In other words: What is the result of the following program?
 * thrice(thrice)(x => x + 1)(0);
 * 
 * Answer: 27
 * Explanation:
 * thrice(thrice)(f) is that same as thrice(thrice(thrice(f))). The function thrice(f)
 * applies f three times. The function thrice(thrice(f)) applies thrice(f) three times,
 * which means it applies f 3 × 3 times. The function thrice(thrice(thrice(f))) applies
 * thrice(thrice(f)) three times, which means it applies f 3 × (3 × 3) times.
 */

/**
 * See if you can now predict what will happen when the following statements are evaluated.
 * Briefly explain what goes on in each case.
 * Note: Function square and add1 are defined as follows:
 * const square = x => x * x;
 * const add1 = x => x + 1;
 */

((thrice(thrice))(add1))(6);
// Answer: 33
((thrice(thrice))(x => x))(compose);
// Answer: compose
((thrice(thrice))(square))(1);
// Answer: 1
((thrice(thrice))(square))(2);
//Answer: 2^(2^27)