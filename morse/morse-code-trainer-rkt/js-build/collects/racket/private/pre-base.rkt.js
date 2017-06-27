import * as $rjs_core from '../../../runtime/core.js';import * as M0 from "./kw.rkt.js";import * as M1 from "./collect.rkt.js";import * as M2 from "../../../runtime/kernel.rkt.js";import * as M3 from "./path.rkt.js";var new_apply_proc = M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws2232, kw_args2233, proc2234, args2235) {var rest2236 = $rjs_core.Pair.listFromArray($rjs_core.argumentsSlice($rjs_core.argumentsToArray(arguments),4));return M0.keyword_apply(proc2234,kws2232,kw_args2233,M2.apply(M2.list_times_,args2235,rest2236));}),M2.apply);var new_keyword_apply = M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws2237, kw_args2238, proc2239, orig_kws2240, orig_kw_args2241, args2242) {var rest2243 = $rjs_core.Pair.listFromArray($rjs_core.argumentsSlice($rjs_core.argumentsToArray(arguments),6));var loop2246 = function(kws2247, kw_args2248, kws22249, kw_args22250, swapped_p2251) {if (M2.null_p(kws2247)) {var if_res1191 = M2.values(kws22249,kw_args22250);} else {if (M2.null_p(kws22249)) {var if_res1190 = M2.values(kws2247,kw_args2248);} else {if (M2.__rjs_quoted__.keyword_lt__p(M2.car(kws2247),M2.car(kws22249))) {var let_result1187 = loop2246(M2.cdr(kws2247),M2.cdr(kw_args2248),kws22249,kw_args22250,false);var res_kws2252 = let_result1187.getAt(0);var res_kw_args2253 = let_result1187.getAt(1);var if_res1189 = M2.values(M2.cons(M2.car(kws2247),res_kws2252),M2.cons(M2.car(kw_args2248),res_kw_args2253));} else {if (swapped_p2251) {var if_res1188 = M2.__rjs_quoted__.raise_mismatch_error($rjs_core.Symbol.make("keyword-apply"),"keyword duplicated in list and direct keyword arguments: ",M2.car(kws2247));} else {var if_res1188 = loop2246(kws22249,kw_args22250,kws2247,kw_args2248,true);}var if_res1189 = if_res1188;}var if_res1190 = if_res1189;}var if_res1191 = if_res1190;}return if_res1191;};var let_result1192 = loop2246(kws2237,kw_args2238,orig_kws2240,orig_kw_args2241,false);var kws2244 = let_result1192.getAt(0);var kw_args2245 = let_result1192.getAt(1);return M0.keyword_apply(proc2239,kws2244,kw_args2245,M2.apply(M2.list_times_,args2242,rest2243));}),M0.keyword_apply);var double_flonum_p = function(x2254) {return M2.__rjs_quoted__.flonum_p(x2254);};var enforce_random_int_range = function(x2255) {if (M2.__rjs_quoted__.exact_positive_integer_p(x2255)) {var if_res1193 = M2._lt__eq_(x2255,4294967087);} else {var if_res1193 = false;}if (if_res1193) {var if_res1194 = M2.rvoid();} else {var if_res1194 = M2.raise_argument_error($rjs_core.Symbol.make("random"),"(integer-in 1 4294967087)",x2255);}return if_res1194;};var enforce_greater = function(x2256, y2257) {if (M2._gt_(y2257,x2256)) {var if_res1195 = M2.rvoid();} else {var if_res1195 = M2.raise_argument_error($rjs_core.Symbol.make("random"),M2.string_append("integer greater than ",M2.number__gt_string(x2256)),y2257);}return if_res1195;};var cl1196 = function() {return M2.random();};var cl1197 = function(x2259) {return M2.random(x2259);};var cl1198 = function(x2260, y2261) {if (M2.__rjs_quoted__.exact_positive_integer_p(y2261)) {enforce_random_int_range(x2260);enforce_random_int_range(y2261);enforce_greater(x2260,y2261);var if_res1202 = x2260+M2.random(y2261-x2260);} else {if (M2.__rjs_quoted__.pseudo_random_generator_p(y2261)) {enforce_random_int_range(x2260);var if_res1201 = M2.random(x2260,y2261);} else {var if_res1201 = M2.raise_argument_error($rjs_core.Symbol.make("random"),"(or/c (integer-in 1 4294967087) pseudo-random-generator?)",y2261);}var if_res1202 = if_res1201;}return if_res1202;};var cl1199 = function(min2262, max2263, prng2264) {enforce_random_int_range(min2262);enforce_random_int_range(max2263);enforce_greater(min2262,max2263);if (M2.__rjs_quoted__.pseudo_random_generator_p(prng2264)) {var if_res1203 = M2.rvoid();} else {var if_res1203 = M2.raise_argument_error($rjs_core.Symbol.make("random"),"pseudo-random-generator?",prng2264);}if_res1203;return min2262+M2.random(max2263-min2262,prng2264);};var random2258 = $rjs_core.attachProcedureArity(function() {var fixed_lam1200 = {'0':cl1196,'1':cl1197,'2':cl1198,'3':cl1199}[arguments.length];if (fixed_lam1200!==undefined) {return fixed_lam1200.apply(null,arguments);} else {return M2.error("case-lambda: invalid case");}},[0,1,2,3]);var _random = random2258;var core42266 = function(fail12267, fail22268, collection32269, new_rest2270) {var collection2271 = collection32269;if (fail22268) {var if_res1204 = fail12267;} else {var if_res1204 = function(s2273) {return M2.raise(M2.__rjs_quoted__.kernel_exn_fail_filesystem(M2.string_append("collection-path: ",s2273),M2.current_continuation_marks()));};}var fail2272 = if_res1204;var collections2274 = new_rest2270;return M1.collection_path(fail2272,collection2271,collections2274);};var unpack52275 = function(given_kws2276, given_args2277, collection32278, new_rest2279) {var fail22280 = M2.pair_p(given_kws2276);if (fail22280) {var if_res1205 = M2.car(given_args2277);} else {var if_res1205 = M2.rvoid();}var fail12281 = if_res1205;return core42266(fail12281,fail22280,collection32278,new_rest2279);};var cl1209 = $rjs_core.attachProcedureArity(function(given_kws2286, given_args2287, collection2288) {var collections2289 = $rjs_core.Pair.listFromArray($rjs_core.argumentsSlice($rjs_core.argumentsToArray(arguments),3));return unpack52275(given_kws2286,given_args2287,collection2288,collections2289);});var temp1212 = $rjs_core.attachProcedureArity(function() {var fixed_lam1210 = {}[arguments.length];if (fixed_lam1210!==undefined) {return fixed_lam1210.apply(null,arguments);} else {if (M2._gt__eq_(cl1209.length,1)) {var if_res1211 = cl1209.apply(null,arguments);} else {var if_res1211 = M2.error("case-lambda: invalid case");}return if_res1211;}},[M2.make_arity_at_least(3)]);var cl1206 = $rjs_core.attachProcedureArity(function(collection2291) {var collections2292 = $rjs_core.Pair.listFromArray($rjs_core.argumentsSlice($rjs_core.argumentsToArray(arguments),1));return unpack52275(M2.rnull,M2.rnull,collection2291,collections2292);});var collection_path2290 = $rjs_core.attachProcedureArity(function() {var fixed_lam1207 = {}[arguments.length];if (fixed_lam1207!==undefined) {return fixed_lam1207.apply(null,arguments);} else {if (M2._gt__eq_(cl1206.length,1)) {var if_res1208 = cl1206.apply(null,arguments);} else {var if_res1208 = M2.error("case-lambda: invalid case");}return if_res1208;}},[M2.make_arity_at_least(1)]);var collection_path2265 = M0.__rjs_quoted__.make_optional_keyword_procedure(function(given_kws2282, given_argc2283) {if (M2._gt__eq_(given_argc2283,3)) {var l12284 = given_kws2282;if (M2.null_p(l12284)) {var if_res1214 = l12284;} else {if (M2.eq_p(M2.car(l12284),$rjs_core.Keyword.make('#:fail'))) {var if_res1213 = M2.cdr(l12284);} else {var if_res1213 = l12284;}var if_res1214 = if_res1213;}var l12285 = if_res1214;var if_res1215 = M2.null_p(l12285);} else {var if_res1215 = false;}return if_res1215;},temp1212,M2.rnull,$rjs_core.Pair.makeList($rjs_core.Keyword.make('#:fail')),collection_path2290);var new_collection_path = collection_path2265;var core122294 = function(check_compiled_p62295, check_compiled_p82296, fail72297, fail92298, file_name102299, collection112300, new_rest2301) {var file_name2302 = file_name102299;var collection2303 = collection112300;if (check_compiled_p82296) {var if_res1217 = check_compiled_p62295;} else {if (M3.path_string_p(file_name2302)) {var if_res1216 = M2.__rjs_quoted__.regexp_match_p("/.[.]rkt$/",file_name2302);} else {var if_res1216 = false;}var if_res1217 = if_res1216;}var check_compiled_p2304 = if_res1217;if (fail92298) {var if_res1218 = fail72297;} else {var if_res1218 = function(s2306) {return M2.raise(M2.__rjs_quoted__.kernel_exn_fail_filesystem(M2.string_append("collection-file-path: ",s2306),M2.current_continuation_marks()));};}var fail2305 = if_res1218;var collections2307 = new_rest2301;return M1.collection_file_path(fail2305,check_compiled_p2304,file_name2302,collection2303,collections2307);};var unpack132308 = function(given_kws2309, given_args2310, file_name102311, collection112312, new_rest2313) {if (M2.pair_p(given_kws2309)) {var if_res1219 = M2.eq_p($rjs_core.Keyword.make('#:check-compiled?'),M2.car(given_kws2309));} else {var if_res1219 = false;}var check_compiled_p82314 = if_res1219;if (check_compiled_p82314) {var if_res1220 = M2.car(given_args2310);} else {var if_res1220 = M2.rvoid();}var check_compiled_p62315 = if_res1220;if (check_compiled_p82314) {var if_res1221 = M2.cdr(given_kws2309);} else {var if_res1221 = given_kws2309;}var given_kws2316 = if_res1221;if (check_compiled_p82314) {var if_res1222 = M2.cdr(given_args2310);} else {var if_res1222 = given_args2310;}var given_args2317 = if_res1222;var fail92318 = M2.pair_p(given_kws2316);if (fail92318) {var if_res1223 = M2.car(given_args2317);} else {var if_res1223 = M2.rvoid();}var fail72319 = if_res1223;return core122294(check_compiled_p62315,check_compiled_p82314,fail72319,fail92318,file_name102311,collection112312,new_rest2313);};var cl1227 = $rjs_core.attachProcedureArity(function(given_kws2326, given_args2327, file_name2328, collection2329) {var collections2330 = $rjs_core.Pair.listFromArray($rjs_core.argumentsSlice($rjs_core.argumentsToArray(arguments),4));return unpack132308(given_kws2326,given_args2327,file_name2328,collection2329,collections2330);});var temp1230 = $rjs_core.attachProcedureArity(function() {var fixed_lam1228 = {}[arguments.length];if (fixed_lam1228!==undefined) {return fixed_lam1228.apply(null,arguments);} else {if (M2._gt__eq_(cl1227.length,1)) {var if_res1229 = cl1227.apply(null,arguments);} else {var if_res1229 = M2.error("case-lambda: invalid case");}return if_res1229;}},[M2.make_arity_at_least(4)]);var cl1224 = $rjs_core.attachProcedureArity(function(file_name2332, collection2333) {var collections2334 = $rjs_core.Pair.listFromArray($rjs_core.argumentsSlice($rjs_core.argumentsToArray(arguments),2));return unpack132308(M2.rnull,M2.rnull,file_name2332,collection2333,collections2334);});var collection_file_path2331 = $rjs_core.attachProcedureArity(function() {var fixed_lam1225 = {}[arguments.length];if (fixed_lam1225!==undefined) {return fixed_lam1225.apply(null,arguments);} else {if (M2._gt__eq_(cl1224.length,1)) {var if_res1226 = cl1224.apply(null,arguments);} else {var if_res1226 = M2.error("case-lambda: invalid case");}return if_res1226;}},[M2.make_arity_at_least(2)]);var collection_file_path2293 = M0.__rjs_quoted__.make_optional_keyword_procedure(function(given_kws2320, given_argc2321) {if (M2._gt__eq_(given_argc2321,4)) {var l12322 = given_kws2320;if (M2.null_p(l12322)) {var if_res1232 = l12322;} else {if (M2.eq_p(M2.car(l12322),$rjs_core.Keyword.make('#:check-compiled?'))) {var if_res1231 = M2.cdr(l12322);} else {var if_res1231 = l12322;}var if_res1232 = if_res1231;}var l12323 = if_res1232;var l12324 = l12323;if (M2.null_p(l12324)) {var if_res1234 = l12324;} else {if (M2.eq_p(M2.car(l12324),$rjs_core.Keyword.make('#:fail'))) {var if_res1233 = M2.cdr(l12324);} else {var if_res1233 = l12324;}var if_res1234 = if_res1233;}var l12325 = if_res1234;var if_res1235 = M2.null_p(l12325);} else {var if_res1235 = false;}return if_res1235;},temp1230,M2.rnull,$rjs_core.Pair.makeList($rjs_core.Keyword.make('#:check-compiled?'), $rjs_core.Keyword.make('#:fail')),collection_file_path2331);var new_collection_file_path = collection_file_path2293;var __rjs_quoted__ = {};export { __rjs_quoted__,_random as random,double_flonum_p,new_keyword_apply as keyword_apply,new_collection_file_path as collection_file_path,new_collection_path as collection_path,new_apply_proc };