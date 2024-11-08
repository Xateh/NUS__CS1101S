function alt_column_matrix(R, C) {
    const M = [];

    // WRITE YOUR SOLUTION HERE.
    for (let r = 0; r < R; r = r + 1) {
        M[r] = [];
        for (let c = 0; c < C; c = c + 1) {
            M[r][c] = c % 2 === 1
                        ? R * (c + 1) - r
                        : R * c + r + 1;
        }
    }

    return M;
}

// alt_column_matrix(4, 5);
// // returns
// // [[1, 8,  9, 16, 17],
// //  [2, 7, 10, 15, 18],
// //  [3, 6, 11, 14, 19],
// //  [4, 5, 12, 13, 20]]

// alt_column_matrix(5, 6);
// // returns
// // [[1, 10, 11, 20, 21, 30],
// //  [2,  9, 12, 19, 22, 29],
// //  [3,  8, 13, 18, 23, 28],
// //  [4,  7, 14, 17, 24, 27],
// //  [5,  6, 15, 16, 25, 26]]

// alt_column_matrix(4, 1);
// // returns
// // [[1],
// //  [2],
// //  [3],
// //  [4]]

// alt_column_matrix(1, 6);
// // returns
// // [[1, 2, 3, 4, 5, 6]]

// We represent a matrix as a "2D array" of numbers (which is actually an array of
// arrays of numbers in Source). For example, the following 2×3 matrix

// Example 2x3 matrix is represented in Source as

// [[1, 3, 6],
//  [8, 5, 0]]

// We will refer to the top row of the matrix as Row 0, and the leftmost column as Column 0.

// For this task, write a function alt_column_matrix(R, C) that takes as arguments
// two positive integers R and C, and returns a RxC alternating-column matrix.
// In an alternating-column matrix, the elements are the natural numbers 1, 2, 3, 4, 5, and so on.
// They are arranged column-wise starting from Column 0.
// In Column 0, the numbers would increase top-down.
// Then the numbers would continue in the next column on the right, but increase bottom-up.
// The numbers would then continue in the columns on the right,
// alternating between increasing top-down and bottom-up in each column.