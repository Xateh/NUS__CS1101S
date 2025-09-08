/**
 * Draw box-and-pointer for the values of the following expressions.
 * Also give box and list notation.
 */
function draw_qn1(qn) {
    return draw_data(qn === 1
                    ? list(list(1, 2, list(3)), list(4, 5), pair(6, 7))
                    //list(list(1, 2, list(3)), list(4, 5), [6, 7])
                    : qn === 2
                    ? pair(1, list(2, 3, pair(4, null)))
                    // list(1, 2, 3, list(4))
                    : pair(1, pair(2, list(3, list(4, 5)))));
                    // list(1, 2, 3, list(4, 5))
    
}
//draw_qn1(1);


/**
 * Examine the following (incorrect) reverse function:
 */
function reverse(lst) {
    return is_null(lst)
            ? null
            : pair(reverse(tail(lst)), head(lst));
}
/**
 * Draw the box-and-pointer diagram, box notation and 
 * list notation for the result returned by the following function call:
 */
//draw_data(reverse(list(1, 2, 3, 4)));


/**
 * Write expressions using lst, head and tail that will return 1
 * when the lst is bound to the following values:
 */
const qn3_pt1 = list(7, list(6, 5, 4), 3, list(2, 1));
const qn3_pt2 = list(list(7), list(6, 5, 4), list(3, 2), 1);
const qn3_pt3 = list(7, list(6), list(5, list(4)), list(3, list(2, list(1))));
const qn3_pt4 = list(7, list(list(6, 5), list(4), 3, 2), list(list(1)));

function get_qn1_pt1() {
    return head(
                tail(
                    head(
                        tail(
                        tail(
                        tail(
                            qn3_pt1))))));
}
//get_qn1_pt1();

function get_qn1_pt2() {
    return head(
                tail(
                tail(
                tail(
                    qn3_pt2))));
}
//get_qn1_pt2();

function get_qn1_pt3() {
    return head(
            head(
                tail(
                    head(
                        tail(
                            head(
                                tail(
                                tail(
                                tail(
                                    qn3_pt3)))))))));
}
//get_qn1_pt3();

function get_qn1_pt4() {
    return head(
            head(
            head(
                tail(
                tail(
                    qn3_pt4)))));
}
//get_qn1_pt4();