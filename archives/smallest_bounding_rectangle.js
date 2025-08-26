const get_x = rs => list_ref(rs, 0);
const get_y = rs => list_ref(rs, 1);
const get_width = rs => list_ref(rs, 2);
const get_height = rs => list_ref(rs, 3);

function smallest_bounding_AAR_area(rs) {

    // WRITE YOUR SOLUTION HERE.
    return (x => (list_ref(x, 2) - list_ref(x, 0)) * 
                    (list_ref(x, 3) - list_ref(x, 1)))
            (accumulate(
                (x, ys) => is_null(ys)
                            ? x
                            : list(
                                math_min(get_x(x), get_x(ys)),
                                math_min(get_y(x), get_y(ys)),
                                math_max(get_width(x), get_width(ys)),
                                math_max(get_height(x), get_height(ys))
                                ),
                null,
                map(x => list(
                            get_x(x),
                            get_y(x),
                            get_x(x) + get_width(x),
                            get_y(x) + get_height(x)),
                    rs))); // convert to list(bottom, left, top right)
}

// const aar1 = list(2, 3, 10, 15);
// const aar2 = list(1, 4, 20, 8 );
// smallest_bounding_AAR_area( list(aar1, aar2) );
// // returns 300  (the smallest bounding AAR is list(1, 3, 20, 15))

function optimized_smallest_bounding_AAR_area(rs) {

    // WRITE YOUR SOLUTION HERE.
    return (x => head(x) * tail(x))
            (accumulate(
                (x, ys) => is_null(ys)
                            ? pair(math_max(get_width(x), get_height(x)),
                                    math_min(get_width(x), get_height(x)))
                            : pair(math_max(math_max(get_width(x), get_height(x)), head(ys)),
                                    math_max(math_min(get_width(x),get_height(x)), tail(ys))),
                null,
                rs));
}

// const aar1 = list(2, 3, 10, 15);
// const aar2 = list(1, 4, 20, 8 );
// optimized_smallest_bounding_AAR_area( list(aar1, aar2) );
// // returns 200

function overlap_area(aar1, aar2) {

    // WRITE YOUR SOLUTION HERE.
    const l_limit = math_max(get_x(aar1), get_x(aar2));
    const r_limit = math_min(get_x(aar1) + get_width(aar1),
                            get_x(aar2) + get_width(aar2));
    const b_limit = math_max(get_y(aar1), get_y(aar2));
    const t_limit = math_min(get_y(aar1) + get_height(aar1),
                            get_y(aar2) + get_height(aar2));
    
    return math_max(r_limit - l_limit, 0) * math_max(t_limit - b_limit, 0);
}

// overlap_area( list(10, 20, 30, 60), list(40, 10, 50, 15) );
// // returns 0

// overlap_area( list(10, 20, 30, 60), list(10, 10, 50, 15) );
// // returns 150

// overlap_area( list(10, 20, 30, 60), list(0, 40, 50, 15) );
// // returns 450

// overlap_area( list(10, 20, 30, 60), list(-25, 75, 50, 15) );
// // returns 75

// A two-dimensional axis-aligned rectangle (AAR) is a rectangle whose sides are 
// parallel to the x-axis or the y-axis. We represent an AAR as a 4-element list, 
// list(x, y, w, h), where (x, y) are the x-coordinate and y-coordinate of
// the bottom-leftmost corner of the AAR, and w > 0 is the horizontal width and 
// h > 0 is the vertical height of the AAR.


// We assume that the x-coordinate increases from left to right, and y-coordinate
// increases from bottom to top.