#lang typed/racket/base

(require require-typed-check)

(require/typed/check "lcs.rkt"
  [longest-common-substring (-> String String String)])

;; LCS on all pairs of lines in a file
(: main (-> String Void))
(define (main testfile)
  (define lines (file->lines testfile))
  (for* ([a lines] [b lines])
    (longest-common-substring a b))
  (void))

;(time (main SMALL_TEST)) ; 110ms
;(time (main LARGE_TEST)) ; 1900ms
;(time (main KCFA_TYPED)) ; 16235ms

(longest-common-substring "hello" "hello")