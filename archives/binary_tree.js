function flatten_bin_tree(T) {

    // WRITE YOUR SOLUTION HERE.
    return is_null(T)
            ? null
            : is_list(T)
            ? append(
                flatten_bin_tree(list_ref(T, 1)),
                pair(
                    list_ref(T, 0),
                    flatten_bin_tree(list_ref(T, 2))))
            : list(T);
}

// const treeA = null;  // empty binary tree
// flatten_bin_tree(treeA);
// // returns null

// const B5 = list(5, null, null);
// const B3 = list(3, null, null);
// const treeB = list(2, B5, B3);  // a binary tree with 3 elements
// flatten_bin_tree(treeB);
// // returns list(5, 2, 3)

// const C5 = list(5, null, null);
// const C6 = list(6, null, C5);
// const C8 = list(8, null, null);
// const C3 = list(3, C8, null);
// const treeC = list(4, C6, C3);  // a binary tree with 5 elements
// flatten_bin_tree(treeC);
// // returns list(6, 5, 4, 8, 3)

// const D1 = list(1, null, null);
// const D4 = list(4, null, null);
// const D3 = list(3, D1, D4);
// const D8 = list(8, null, null);
// const D7 = list(7, null, D8);
// const treeD = list(5, D3, D7);  // a binary tree with 6 elements
// flatten_bin_tree(treeD);
// // returns list(1, 3, 4, 5, 7, 8)

function insert(x, xs) {
return is_null(xs)
       ? list(x)
       : x <= head(xs)
       ? pair(x, xs)
       : pair(head(xs), insert(x, tail(xs)));
}

function insertion_sort(xs) {
    return is_null(xs)
           ? xs
           : insert(head(xs), insertion_sort(tail(xs)));
}

function list_to_array(L) {
    const A = [];
    let i = 0;
    for (let p = L; !is_null(p); p = tail(p)) {
        A[i] = head(p);
        i = i + 1;
    }
    return A;
}

function make_balanced_BST(L) {

    // WRITE YOUR SOLUTION HERE.
    function helper(L, low, high) {
        const middle = math_ceil((low + high) / 2);
        return low > high
                ? null
                : list(
                    list_ref(L, middle),
                    helper(L, low, middle - 1),
                    helper(L, middle + 1, high)
                );
    }
    
    return helper(insertion_sort(L), 0, length(L) - 1);
}

// make_balanced_BST(null);
// // returns null

// make_balanced_BST( list(8) );
// // returns list(8, null, null)

// make_balanced_BST( list(3, 1, 4, 2) );
// // returns list(3, list(2, list(1, null, null), null),
// //                 list(4, null, null))

// make_balanced_BST( list(4, 6, 1, 3, 7, 5) );
// // returns list(5, list(3, list(1, null, null), list(4, null, null)),
// //                 list(7, list(6, null, null), null))

function bin_tree_to_BST(T) {

    // WRITE YOUR SOLUTION HERE.
    function helper(T) {
        if (is_null(T)) {
            return null;
        } else {
            const left_T = helper(list_ref(T, 1));
            const middle_T = head(flat_T);
            flat_T = tail(flat_T);
            const right_T = helper(list_ref(T, 2));
            
            return list(middle_T, left_T, right_T);
        }
    }
    
    let flat_T = insertion_sort(flatten_bin_tree(T));
    return helper(T);
}

// const btreeA = list(2, list(5, null, null), list(3, null, null));
// bin_tree_to_BST(btreeA);
// // returns     list(3, list(2, null, null), list(5, null, null));

// const btreeB = list(4, list(5, list(6, null, null), list(3, null, null)),
//                       list(7, list(1, null, null), null));
// bin_tree_to_BST(btreeB);
// // returns     list(5, list(3, list(1, null, null), list(4, null, null)),
// //                     list(7, list(6, null, null), null))

// const btreeC = list(1, list(5, list(4, list(7, null, null),
//                                       list(6, null, null)),
//                               list(3, null, null)),
//                       list(2, null, null));
// bin_tree_to_BST(btreeC);
// // returns     list(6, list(4, list(2, list(1, null, null),
// //                                     list(3, null, null)),
// //                             list(5, null, null)),
// //                     list(7, null, null))


// A binary tree is either empty or has an entry, a left branch (a.k.a. left subtree)
// and a right branch (a.k.a. right subtree), where the entry is a number and the
// left and right branches are binary trees.


// The entry of a binary tree T, together with the entries of its left and right
// branches, and all the entries of their left and right branches, and so on, are the elements of T.


// A binary search tree (BST) is a binary tree that has an additional property ---
// for each tree whose entry is m, all elements of its left branch are smaller than
// m and all elements of its right branch are larger than m. We assume there are
// no duplicate elements in the tree.

// Here, we will represent
// the empty binary tree as null, and
// a non-empty binary tree as a list of length 3: list(entry, left_branch, right_branch)