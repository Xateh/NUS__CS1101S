const siever = s => pair(head(s),
                            () => siever( 
                                    stream_filter(x => x % head(s) !== 0, 
                                        stream_tail(s)
                                        )
                            )
                        );
stream_ref(siever(integers_from(2)),750);