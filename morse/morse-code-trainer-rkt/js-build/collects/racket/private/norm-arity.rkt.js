import * as $rjs_core from '../../../runtime/core.js';import * as M0 from "../../../runtime/kernel.rkt.js";import * as M1 from "./sort.rkt.js";var procedure_arity4507 = function(p4508) {return normalize_arity(M0.procedure_arity(p4508));};var norm_procedure_arity = procedure_arity4507;var raise_arity_error4509 = $rjs_core.attachProcedureArity(function(name4510, arity_v4511) {var arg_vs4512 = $rjs_core.Pair.listFromArray($rjs_core.argumentsSlice($rjs_core.argumentsToArray(arguments),2));var or_part4513 = M0.exact_nonnegative_integer_p(arity_v4511);if (or_part4513) {var if_res2746 = or_part4513;} else {var or_part4514 = M0.arity_at_least_p(arity_v4511);if (or_part4514) {var if_res2745 = or_part4514;} else {if (M0.list_p(arity_v4511)) {var if_res2744 = M0.andmap(function(x4515) {var or_part4516 = M0.exact_nonnegative_integer_p(x4515);if (or_part4516) {var if_res2743 = or_part4516;} else {var if_res2743 = M0.arity_at_least_p(x4515);}return if_res2743;},arity_v4511);} else {var if_res2744 = false;}var if_res2745 = if_res2744;}var if_res2746 = if_res2745;}if (if_res2746) {var if_res2747 = M0.apply(M0.__rjs_quoted__.raise_arity_error,name4510,normalize_arity(arity_v4511),arg_vs4512);} else {var if_res2747 = M0.apply(M0.__rjs_quoted__.raise_arity_error,name4510,arity_v4511,arg_vs4512);}return if_res2747;});var norm_raise_arity_error = raise_arity_error4509;var normalize_arity = function(arity4517) {if (M0.procedure_arity_p(arity4517)) {var if_res2748 = M0.rvoid();} else {var if_res2748 = M0.raise_argument_error($rjs_core.Symbol.make("normalize-arity"),"procedure-arity?",arity4517);}if_res2748;if (M0.pair_p(arity4517)) {var reversed4518 = reverse_sort_arity(arity4517);var normalized4519 = normalize_reversed_arity(reversed4518,$rjs_core.Pair.Empty);var simplified4520 = normalize_singleton_arity(normalized4519);var if_res2749 = simplified4520;} else {var if_res2749 = arity4517;}return if_res2749;};var normalize_singleton_arity = function(arity4521) {if (M0.pair_p(arity4521)) {var if_res2750 = M0.null_p(M0.cdr(arity4521));} else {var if_res2750 = false;}if (if_res2750) {var if_res2751 = M0.car(arity4521);} else {var if_res2751 = arity4521;}return if_res2751;};var normalize_reversed_arity = function(arity4522, tail4523) {if (M0.pair_p(arity4522)) {var if_res2752 = normalize_reversed_arity(M0.cdr(arity4522),arity_insert(M0.car(arity4522),tail4523));} else {var if_res2752 = tail4523;}return if_res2752;};var arity_insert = function(elem4524, arity4525) {if (M0.pair_p(arity4525)) {var next4526 = M0.car(arity4525);if (M0.arity_at_least_p(next4526)) {var next_value4527 = M0.arity_at_least_value(next4526);if (M0.arity_at_least_p(elem4524)) {var elem_value4528 = M0.arity_at_least_value(elem4524);if (M0._lt_(elem_value4528,next_value4527)) {var if_res2753 = M0.cons(elem4524,M0.cdr(arity4525));} else {var if_res2753 = arity4525;}var if_res2756 = if_res2753;} else {if (M0._lt_(elem4524,next_value4527-1)) {var if_res2755 = M0.cons(elem4524,arity4525);} else {if (M0._eq_(elem4524,next_value4527-1)) {var if_res2754 = M0.cons(M0.arity_at_least(elem4524),M0.cdr(arity4525));} else {var if_res2754 = arity4525;}var if_res2755 = if_res2754;}var if_res2756 = if_res2755;}var if_res2758 = if_res2756;} else {if (M0._lt_(elem4524,next4526)) {var if_res2757 = M0.cons(elem4524,arity4525);} else {var if_res2757 = arity4525;}var if_res2758 = if_res2757;}var if_res2759 = if_res2758;} else {var if_res2759 = M0.cons(elem4524,arity4525);}return if_res2759;};var reverse_sort_arity = function(arity4529) {return M1.sort(arity4529,arity_gt__p);};var arity_gt__p = function(a4530, b4531) {if (M0.arity_at_least_p(a4530)) {if (M0.arity_at_least_p(b4531)) {var if_res2760 = M0._gt_(M0.arity_at_least_value(a4530),M0.arity_at_least_value(b4531));} else {var if_res2760 = true;}var if_res2762 = if_res2760;} else {if (M0.arity_at_least_p(b4531)) {var if_res2761 = false;} else {var if_res2761 = M0._gt_(a4530,b4531);}var if_res2762 = if_res2761;}return if_res2762;};var __rjs_quoted__ = {};export { __rjs_quoted__,normalize_arity,norm_raise_arity_error,norm_procedure_arity };