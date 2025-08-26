function make_postfix_exp(bae) {

    // WRITE YOUR SOLUTION HERE.
    function append_array(arr1, arr2, arr3) {
        const arr = [];
        let curr_len = 0;
        
        for (let i = 0; i < array_length(arr1); i = i + 1) {
            arr[i + curr_len] = arr1[i];
        }
        curr_len = array_length(arr);
        for (let i = 0; i < array_length(arr2); i = i + 1) {
            arr[i + curr_len] = arr2[i];
        }
        curr_len = array_length(arr);
        for (let i = 0; i < array_length(arr3); i = i + 1) {
            arr[i + curr_len] = arr3[i];
        }
        
        return arr;
    }
    
    return is_array(bae)
            ? append_array(
                make_postfix_exp(bae[0]),
                make_postfix_exp(bae[2]),
                [bae[1]])
            : [bae];
}

// const bae = [ [8, "-", 2], "*", [7, "+", 3] ];
// make_postfix_exp(bae);  // returns [8, 2, "-", 7, 3, "+", "*"]

function eval_postfix_exp(pfe) {

    // WRITE YOUR SOLUTION HERE.
    const pfe_len = array_length(pfe);
    let store = [];
    const store_len = () => array_length(store);
    
    for (let i = 0; i < pfe_len; i = i + 1) {
        if (is_number(pfe[i])) {
            store[store_len()] = pfe[i];
        } else {
            pfe[i] === '+'
            ? store[store_len() - 2] =
                store[store_len() - 2] + store[store_len() - 1]
            : pfe[i] === '-'
            ? store[store_len() - 2] =
                store[store_len() - 2] - store[store_len() - 1]
            : pfe[i] === '*'
            ? store[store_len() - 2] =
                store[store_len() - 2] * store[store_len() - 1]
            : pfe[i] === '/'
            ? store[store_len() - 2] =
                store[store_len() - 2] / store[store_len() - 1]
            : null;
            
            const temp = [];
            for (let i = 0; i < store_len() - 1; i = i + 1) {
                temp[i] = store[i];
            }
            store = temp;
        }
    }
    
    return store[0];
}

// const pfe = [8, 2, "-", 7, 3, "+", "*"];
// eval_postfix_exp(pfe);  // returns 60


// A Binary Arithmetic Expression (BAE) is either a number or the expression ( bae op bae ), where each bae is a BAE and op is the binary operator +, -, *, or /. The followings are examples of BAEs:

// 123
// ( 56 + 23 )
// ( ( 2 + 5 ) * 100 )
// We represent BAEs in Source in the following way:
// a BAE is either a number or an array that has 3 elements where the first element is a BAE,
// the second element is a string "+", "-", "*" or "/", and the third element is a BAE.
// The first and third elements are the left and right operands of the binary arithmetic operation, respectively.
// For example, the BAE ( ( 2 + 5 ) * 100 ) has the following representation in Source:
// [ [2, "+", 5], "*", 100 ].

// A Postfix Expression (PFE) is either a number or the expression pfe_L pfe_R op,
// where pfe_L and pfe_R are each a PFE and op is the binary operator +, -, *, or /.
// The PFE pfe_L is the left operand of op, and pfe_R the right operand.

// The followings are examples of PFEs:

// 123
// 56 23 + --- corresponds to BAE ( 56 + 23 )
// 100 2 5 + * --- corresponds to BAE ( 100 * ( 2 + 5 ) )
// 8 2 - 7 3 + * --- corresponds to BAE ( ( 8 - 2 ) * ( 7 + 3 ) )
// Each number and operator in a PFE is a token. For example, the PFE 56 23 + has three tokens.

// We represent a PFE in Source as a 1D array that contains all the tokens of the PFE in the same order. Each operator in the array is a string "+", "-", "*", or "/". For examples,

// the array [123] represents the PFE 123
// the array [8, 2, "-", 7, 3, "+", "*"] represents the PFE 8 2 - 7 3 + *