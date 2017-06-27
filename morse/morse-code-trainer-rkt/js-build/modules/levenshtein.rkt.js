import * as $rjs_core from '../runtime/core.js';import * as M0 from "../runtime/kernel.rkt.js";var _identity = function(x1958) {return x1958;};var _string_empty_p = function(v1959) {return M0.zero_p(M0.string_length(v1959));};var _vector_empty_p = function(v1960) {return M0.zero_p(M0.vector_length(v1960));};var _string__gt_vector = function(s1961) {return M0.list__gt_vector(M0.string__gt_list(s1961));};var vector_levenshtein_by_predicate_by_get_scratch = function(a1962, b1963, pred1964, get_scratch1965) {var a_len1966 = M0.vector_length(a1962);var b_len1967 = M0.vector_length(b1963);if (M0.zero_p(a_len1966)) {var if_res1040 = b_len1967;} else {if (M0.zero_p(b_len1967)) {var if_res1039 = a_len1966;} else {var w1968 = get_scratch1965(1+b_len1967);var next1969 = false;var fill1970 = function(k1971) {M0.vector_set_bang_(w1968,k1971,k1971);var or_part1972 = M0.zero_p(k1971);if (or_part1972) {var if_res1034 = or_part1972;} else {var if_res1034 = fill1970(k1971-1);}return if_res1034;};fill1970(b_len1967);var loop_i1973 = function(i1974) {if (M0._eq_(i1974,a_len1966)) {var if_res1038 = next1969;} else {var a_i1975 = M0.vector_ref(a1962,i1974);var loop_j1976 = function(j1977, cur1978) {if (M0._eq_(j1977,b_len1967)) {M0.vector_set_bang_(w1968,b_len1967,next1969);var if_res1037 = loop_i1973(1+i1974);} else {var temp1036 = 1+M0.vector_ref(w1968,1+j1977);if (pred1964(a_i1975,M0.vector_ref(b1963,j1977))) {var if_res1035 = M0.vector_ref(w1968,j1977);} else {var if_res1035 = 1+M0.vector_ref(w1968,j1977);}next1969 = M0.min(temp1036,1+cur1978,if_res1035);M0.vector_set_bang_(w1968,j1977,cur1978);var if_res1037 = loop_j1976(1+j1977,next1969);}return if_res1037;};var if_res1038 = loop_j1976(0,1+i1974);}return if_res1038;};var if_res1039 = loop_i1973(0);}var if_res1040 = if_res1039;}return if_res1040;};var vector_levenshtein_by_predicate = function(a1979, b1980, pred1981) {return vector_levenshtein_by_predicate_by_get_scratch(a1979,b1980,pred1981,M0.make_vector);};var vector_levenshtein_by_eq = function(a1982, b1983) {return vector_levenshtein_by_predicate(a1982,b1983,M0.eq_p);};var vector_levenshtein_by_eqv = function(a1984, b1985) {return vector_levenshtein_by_predicate(a1984,b1985,M0.eqv_p);};var vector_levenshtein_by_equal = function(a1986, b1987) {return vector_levenshtein_by_predicate(a1986,b1987,M0.equal_p);};var vector_levenshtein = function(a1988, b1989) {return vector_levenshtein_by_equal(a1988,b1989);};var list_levenshtein_by_predicate = function(a1990, b1991, pred1992) {if (M0.null_p(a1990)) {var if_res1042 = M0.length(b1991);} else {if (M0.null_p(b1991)) {var if_res1041 = M0.length(a1990);} else {var if_res1041 = vector_levenshtein_by_predicate(M0.list__gt_vector(a1990),M0.list__gt_vector(b1991),pred1992);}var if_res1042 = if_res1041;}return if_res1042;};var list_levenshtein_by_eq = function(a1993, b1994) {return list_levenshtein_by_predicate(a1993,b1994,M0.eq_p);};var list_levenshtein_by_eqv = function(a1995, b1996) {return list_levenshtein_by_predicate(a1995,b1996,M0.eqv_p);};var list_levenshtein_by_equal = function(a1997, b1998) {return list_levenshtein_by_predicate(a1997,b1998,M0.equal_p);};var list_levenshtein = function(a1999, b2000) {return list_levenshtein_by_equal(a1999,b2000);};var string_levenshtein = function(a2001, b2002) {if (M0.zero_p(M0.string_length(a2001))) {var if_res1044 = M0.string_length(b2002);} else {if (M0.zero_p(M0.string_length(b2002))) {var if_res1043 = M0.string_length(a2001);} else {var if_res1043 = vector_levenshtein_by_eqv(_string__gt_vector(a2001),_string__gt_vector(b2002));}var if_res1044 = if_res1043;}return if_res1044;};var _string_levenshtein_by_predicate = function(a2003, b2004, pred2005) {if (M0.zero_p(M0.string_length(a2003))) {var if_res1046 = M0.string_length(b2004);} else {if (M0.zero_p(M0.string_length(b2004))) {var if_res1045 = M0.string_length(a2003);} else {var if_res1045 = vector_levenshtein_by_predicate(_string__gt_vector(a2003),_string__gt_vector(b2004),pred2005);}var if_res1046 = if_res1045;}return if_res1046;};var levenshtein = function(a2006, b2007) {if (M0.string_p(a2006)) {var if_res1047 = M0.string_p(b2007);} else {var if_res1047 = false;}if (if_res1047) {var if_res1052 = string_levenshtein(a2006,b2007);} else {if (M0.vector_p(a2006)) {var if_res1048 = M0.vector_p(b2007);} else {var if_res1048 = false;}if (if_res1048) {var if_res1051 = vector_levenshtein(a2006,b2007);} else {if (M0.list_p(a2006)) {var if_res1049 = M0.list_p(b2007);} else {var if_res1049 = false;}if (if_res1049) {var if_res1050 = list_levenshtein(a2006,b2007);} else {var if_res1050 = M0.error("levenshtein");}var if_res1051 = if_res1050;}var if_res1052 = if_res1051;}return if_res1052;};var __rjs_quoted__ = {};export { __rjs_quoted__,vector_levenshtein_by_predicate_by_get_scratch,vector_levenshtein_by_predicate,vector_levenshtein_by_eqv,vector_levenshtein_by_equal,vector_levenshtein_by_eq,vector_levenshtein,string_levenshtein,list_levenshtein_by_predicate,list_levenshtein_by_eqv,list_levenshtein_by_equal,list_levenshtein_by_eq,list_levenshtein,levenshtein };