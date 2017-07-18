#!/bin/sh
BASE=`dirname "$0"`
BASE=`realpath "$BASE"`
domkbad() {
    local bm
    bm="$1"
    mkdir -p mkbad-results/$bm

    for i in `seq -w 01 10`
    do
        (
            cd "$bm"
            node "$BASE/mkbad.js" `nproc --all` 
        ) | tee mkbad-results/$bm/$i.csv
    done
}

domkbad morse/typed
domkbad sieve/typed
domkbad snake/typed
domkbad suffixtree
domkbad tetris/typed
