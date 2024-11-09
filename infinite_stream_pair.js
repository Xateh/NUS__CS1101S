function streamify(s1, s2) {
    return pair(
                pair(head(s1), () => pair(head(s2), () => null)),
                () => streamify(stream_tail(s1),
                                stream_tail(s2)));
}

function eval_streamify(s) {
    return is_null(s)
            ? null
            : is_null(head(s))
            ? eval_streamify(stream_tail(s))
            : is_stream(head(s))
            ? eval_streamify(
                pair(head(head(s)),
                    () => eval_streamify(
                            pair(stream_tail(head(s)),
                                tail(s)))))
            : pair(head(s),
                    () => eval_streamify(stream_tail(s)));
}

function stream_pair(s){
    const helper = s => ((pair_s => pair(head(pair_s),
                            () => streamify(stream_tail(pair_s),
                                            helper(stream_tail(s)))))
                        (stream_map(
                            x => pair(head(s), x),
                            stream_tail(s))));
    return eval_streamify(helper(s));
}

stream_ref(stream_pair(integers_from(1)), 400);