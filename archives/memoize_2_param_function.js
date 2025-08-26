function memoize_2_param_function(f) {
    const mem = [];
    
    const arr_n = [];
    const arr_k = [];
    
    function arr_pos(v, arr) {
        function helper(i) {
            return arr[i] === undefined
                    ? null
                    : arr[i] === v
                    ? i
                    : helper(i + 1);
        }
        return helper(0);
    }
    
    function read(n, k) {
        const n_pos = arr_pos(n, arr_n);
        const k_pos = arr_pos(k, arr_k);
        return is_null(n_pos) || is_null(k_pos)
              ? undefined
              : mem[n_pos][k_pos];
    }
    
    function write(n, k, value) {
        if (is_null(arr_pos(n, arr_n))) {
            arr_n[array_length(arr_n)] = n;
            mem[array_length(mem)] = [];
        }
        if (is_null(arr_pos(k, arr_k))) {
            arr_k[array_length(arr_k)] = k;
        }
        mem[arr_pos(n, arr_n)][arr_pos(k, arr_k)] = value;
    }
    
    function mf(n, k) {
        if (read(n, k) !== undefined) {
            return read(n, k);
        } else {
            const res = f(n, k);
            write(n, k, res);
            return res;
        }
    }
    return mf;
}


const memoized_sublist = memoize_2_param_function(
                            (n, k) => 
                                k <= 0
                                ? list(null)
                                : is_null(n) || length(n) < k
                                ? null
                                : append(
                                    map(x => pair(head(n), x), memoized_sublist(tail(n), k - 1)),
                                    memoized_sublist(tail(n), k)
                                    )
                        );

memoized_sublist(list(1,2), 1);
memoized_sublist(list(1), 1);

// const memoized_choose = memoize_2_param_function(
//                             (n, k) => 
//                                 k === 0
//                                 ? 1
//                                 : k > n
//                                 ? 0
//                                 : memoized_choose(n - 1, k - 1) + memoized_choose(n - 1, k)
//                         );

// memoized_choose(4, 2);
// memoized_choose(3, 1);