/**
 * Suppose we’re designing a point-of-sale and order-tracking system for a new burger joint.
 * It is a small joint and it only sells 4 options for combos: Classic Single Combo (hamburger
 * with one patty), Classic Double With Cheese Combo (2 patties), and Classic Triple with
 * Cheese Combo (3 patties), Avant-Garde Quadruple with Guacamole Combo (4 patties). We
 * shall encode these combos as 1, 2, 3, and 4 respectively. Each meal can be biggie-sized to
 * acquire a larger box of fries and drink. A biggie-sized combo is represented by 5, 6, 7, and
 * 8 respectively, for combos 1, 2, 3, and 4 respectively.
 */

/**
 * Write a function named biggie_size which when given a regular combo returns a biggie-
 * sized version.
 */

function biggie_size(meal) {
    return meal + 4
}

/**
 * Write a function named unbiggie_size which when given a biggie-sized combo returns a
 * non-biggie-sized version.
 */

function unbiggie_size(meal) {
    return meal - 4
}

/**
 * combo has been biggie-sized and false otherwise.
 */
function is_biggie_size(meal) {
    return meal > 4;
}

/**
 * Write a function named combo_price which takes a combo and returns the price of the
 * combo. Each patty costs $1.17, and a biggie-sized version costs $0.50 extra overall.
 */
function combo_price(meal) {
    return is_biggie_size(meal)
        ? (unbiggie_size(meal) * 1.17) + 0.50
        : meal * 1.17;
}

/**
 * An order is a collection of combos. We will encode an order as each digit representing a
 * combo. For example, the order 237 represents a Double, Triple, and biggie-sized Triple.
 * Write a function named empty_order which takes no arguments and returns an empty
 * order which is represented by 0.
 */
function empty_order() {
    return 0;
}

/**
 * Write a function named add_to_order which takes an order and a combo and returns a
 * new order which contains the contents of the old order and the new combo. For example,
 * add_to_order(1, 2) returns 12.
 */
function add_to_order(order, combo) {
    return order * 10 + combo;
}

/**
 * Write a function named last_combo which takes an order and returns the last combo. For
 * example, last_combo(321) returns 1.
 */
function last_combo(order) {
    return order % 10;
}

/**
 * Write a function named other_combos which takes an order and returns a new order with-
 * out the last combo. For example, other_combos(321) returns 32.
 */
function other_combos(order) {
    return math_floor(order / 10);
}