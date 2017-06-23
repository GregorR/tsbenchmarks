import * as $rjs_core from '../../../runtime/core.js';import * as M0 from "../../../runtime/kernel.rkt.js";import * as M1 from "./more-scheme.rkt.js";import * as M2 from "../../../runtime/unsafe.rkt.js";var force_by_composable = function(root3699) {var v3700 = M2.unsafe_struct_ref(root3699,0);if (M0.procedure_p(v3700)) {M2.__rjs_quoted__.unsafe_struct_set_bang_(root3699,0,make_running(M0.__rjs_quoted__.object_name(v3700)));var if_res2320 = M1.call_with_exception_handler(function(e3701) {M2.__rjs_quoted__.unsafe_struct_set_bang_(root3699,0,make_reraise(e3701));return e3701;},function() {var loop3702 = function(v3703) {if (composable_promise_p(v3703)) {var v_times_3704 = M2.unsafe_struct_ref(v3703,0);M2.__rjs_quoted__.unsafe_struct_set_bang_(v3703,0,root3699);if (M0.procedure_p(v_times_3704)) {var if_res2312 = loop3702(v_times_3704());} else {if (M0.pair_p(v_times_3704)) {M2.__rjs_quoted__.unsafe_struct_set_bang_(root3699,0,v_times_3704);var if_res2311 = M2.unsafe_car(v_times_3704);} else {var if_res2311 = loop3702(v_times_3704);}var if_res2312 = if_res2311;}var if_res2314 = if_res2312;} else {if (promise_p(v3703)) {M2.__rjs_quoted__.unsafe_struct_set_bang_(root3699,0,v3703);var if_res2313 = force(v3703);} else {M2.__rjs_quoted__.unsafe_struct_set_bang_(root3699,0,M0.list(v3703));var if_res2313 = v3703;}var if_res2314 = if_res2313;}return if_res2314;};return loop3702(v3700());});} else {if (M0.pair_p(v3700)) {if (M0.null_p(M2.unsafe_cdr(v3700))) {var if_res2315 = M2.unsafe_car(v3700);} else {var if_res2315 = M0.apply(M0.values,v3700);}var if_res2319 = if_res2315;} else {if (composable_promise_p(v3700)) {var if_res2318 = force_by_composable(v3700);} else {if (M0.null_p(v3700)) {var if_res2317 = M0.values();} else {if (promise_p(v3700)) {var if_res2316 = force(v3700);} else {var if_res2316 = M0.error($rjs_core.Symbol.make("force"),"composable promise with invalid contents: ~e",v3700);}var if_res2317 = if_res2316;}var if_res2318 = if_res2317;}var if_res2319 = if_res2318;}var if_res2320 = if_res2319;}return if_res2320;};var reify_result = function(v3705) {if (M0.pair_p(v3705)) {if (M0.null_p(M2.unsafe_cdr(v3705))) {var if_res2321 = M2.unsafe_car(v3705);} else {var if_res2321 = M0.apply(M0.values,v3705);}var if_res2324 = if_res2321;} else {if (M0.null_p(v3705)) {var if_res2323 = M0.values();} else {if (reraise_p(v3705)) {var if_res2322 = v3705();} else {var if_res2322 = M0.error($rjs_core.Symbol.make("force"),"promise with invalid contents: ~e",v3705);}var if_res2323 = if_res2322;}var if_res2324 = if_res2323;}return if_res2324;};var force_by_generic = function(promise3706) {var v3707 = M2.unsafe_struct_ref(promise3706,0);if (M0.procedure_p(v3707)) {M2.__rjs_quoted__.unsafe_struct_set_bang_(promise3706,0,make_running(M0.__rjs_quoted__.object_name(v3707)));var if_res2325 = M1.call_with_exception_handler(function(e3708) {M2.__rjs_quoted__.unsafe_struct_set_bang_(promise3706,0,make_reraise(e3708));return e3708;},function() {var vs3709 = M0.call_with_values(v3707,M0.list);M2.__rjs_quoted__.unsafe_struct_set_bang_(promise3706,0,vs3709);return vs3709;});} else {var if_res2325 = v3707;}return reify_result(if_res2325);};var force = function(promise3710) {if (promise_p(promise3710)) {var if_res2326 = promise_forcer(promise3710)(promise3710);} else {var if_res2326 = promise3710;}return if_res2326;};var promise_printer = function(promise3711, port3712, write_p3713) {var loop3714 = function(v3715) {if (reraise_p(v3715)) {var r3716 = reraise_val(v3715);if (M0.__rjs_quoted__.exn_p(r3716)) {if (write_p3713) {var if_res2327 = "#<promise!exn!~s>";} else {var if_res2327 = "#<promise!exn!~a>";}var if_res2329 = M0.__rjs_quoted__.fprintf(port3712,if_res2327,M0.__rjs_quoted__.exn_message(r3716));} else {if (write_p3713) {var if_res2328 = "#<promise!raise!~s>";} else {var if_res2328 = "#<promise!raise!~a>";}var if_res2329 = M0.__rjs_quoted__.fprintf(port3712,if_res2328,r3716);}var if_res2339 = if_res2329;} else {if (running_p(v3715)) {var r3717 = running_name(v3715);if (r3717) {var if_res2330 = M0.__rjs_quoted__.fprintf(port3712,"#<promise:!running!~a>",r3717);} else {var if_res2330 = M0.__rjs_quoted__.fprintf(port3712,"#<promise:!running>");}var if_res2338 = if_res2330;} else {if (M0.procedure_p(v3715)) {var c452373718 = M0.__rjs_quoted__.object_name(v3715);if (c452373718) {var if_res2331 = (function(n3719) {return M0.__rjs_quoted__.fprintf(port3712,"#<promise:~a>",n3719);})(c452373718);} else {var if_res2331 = M0.display("#<promise>",port3712);}var if_res2337 = if_res2331;} else {if (promise_p(v3715)) {var if_res2336 = loop3714(M2.unsafe_struct_ref(v3715,0));} else {if (M0.null_p(v3715)) {var if_res2335 = M0.__rjs_quoted__.fprintf(port3712,"#<promise!(values)>");} else {if (M0.null_p(M0.cdr(v3715))) {if (write_p3713) {var if_res2332 = "#<promise!~s>";} else {var if_res2332 = "#<promise!~a>";}var if_res2334 = M0.__rjs_quoted__.fprintf(port3712,if_res2332,M0.car(v3715));} else {M0.display("#<promise!(values",port3712);if (write_p3713) {var if_res2333 = " ~s";} else {var if_res2333 = " ~a";}var fmt3720 = if_res2333;M0.for_each(function(x3721) {return M0.__rjs_quoted__.fprintf(port3712,fmt3720,x3721);},v3715);var if_res2334 = M0.display(")>",port3712);}var if_res2335 = if_res2334;}var if_res2336 = if_res2335;}var if_res2337 = if_res2336;}var if_res2338 = if_res2337;}var if_res2339 = if_res2338;}return if_res2339;};return loop3714(M2.unsafe_struct_ref(promise3711,0));};var let_result2342 = M0.make_struct_type_property($rjs_core.Symbol.make("forcer"),function(v3725, info3726) {if (M0.procedure_p(v3725)) {var if_res2340 = M0.procedure_arity_includes_p(v3725,1);} else {var if_res2340 = false;}if (if_res2340) {var if_res2341 = M0.rvoid();} else {var if_res2341 = M0.raise_argument_error($rjs_core.Symbol.make("prop:force"),"(any/c . -> . any)",v3725);}if_res2341;return v3725;},M0.rnull,true);var prop3722 = let_result2342.getAt(0);var pred_p3723 = let_result2342.getAt(1);var get3724 = let_result2342.getAt(2);var let_result2343 = M0.values(prop3722,get3724);var prop_force = let_result2343.getAt(0);var promise_forcer = let_result2343.getAt(1);var let_result2344 = M0.make_struct_type($rjs_core.Symbol.make("promise"),false,1,0,false,M0.list(M0.cons(prop_force,force_by_generic),M0.cons(M0.__rjs_quoted__.prop_custom_write,promise_printer)),M0.current_inspector(),false,$rjs_core.Pair.Empty,false,$rjs_core.Symbol.make("promise"));var struct_3727 = let_result2344.getAt(0);var make_3728 = let_result2344.getAt(1);var _p3729 = let_result2344.getAt(2);var _ref3730 = let_result2344.getAt(3);var _set_bang_3731 = let_result2344.getAt(4);var let_result2345 = M0.values(struct_3727,make_3728,_p3729,M0.make_struct_field_accessor(_ref3730,0,$rjs_core.Symbol.make("val")),M0.make_struct_field_mutator(_set_bang_3731,0,$rjs_core.Symbol.make("val")));var struct_promise = let_result2345.getAt(0);var make_promise = let_result2345.getAt(1);var promise_p = let_result2345.getAt(2);var promise_val = let_result2345.getAt(3);var set_promise_val_bang_ = let_result2345.getAt(4);var let_result2346 = M0.make_struct_type($rjs_core.Symbol.make("composable-promise"),struct_promise,0,0,false,M0.list(M0.cons(prop_force,force_by_composable)),M0.current_inspector(),false,$rjs_core.Pair.Empty,false,$rjs_core.Symbol.make("composable-promise"));var struct_3732 = let_result2346.getAt(0);var make_3733 = let_result2346.getAt(1);var _p3734 = let_result2346.getAt(2);var _ref3735 = let_result2346.getAt(3);var _set_bang_3736 = let_result2346.getAt(4);var let_result2347 = M0.values(struct_3732,make_3733,_p3734);var struct_composable_promise = let_result2347.getAt(0);var make_composable_promise = let_result2347.getAt(1);var composable_promise_p = let_result2347.getAt(2);var lazy = make_composable_promise;var delay = make_promise;var let_result2348 = M0.make_struct_type($rjs_core.Symbol.make("reraise"),false,1,0,false,M0.list(M0.cons(M0.prop_procedure,function(this3742) {return M0.raise(reraise_val(this3742));})),M0.current_inspector(),false,$rjs_core.Pair.makeList(0),false,$rjs_core.Symbol.make("reraise"));var struct_3737 = let_result2348.getAt(0);var make_3738 = let_result2348.getAt(1);var _p3739 = let_result2348.getAt(2);var _ref3740 = let_result2348.getAt(3);var _set_bang_3741 = let_result2348.getAt(4);var let_result2349 = M0.values(struct_3737,make_3738,_p3739,M0.make_struct_field_accessor(_ref3740,0,$rjs_core.Symbol.make("val")));var struct_reraise = let_result2349.getAt(0);var make_reraise = let_result2349.getAt(1);var reraise_p = let_result2349.getAt(2);var reraise_val = let_result2349.getAt(3);var let_result2352 = M0.make_struct_type($rjs_core.Symbol.make("running"),false,1,0,false,M0.list(M0.cons(M0.__rjs_quoted__.prop_custom_write,function(this3748, port3749, write_p3750) {if (write_p3750) {var if_res2351 = "#<running:~s>";} else {var if_res2351 = "#<running:~a>";}return M0.__rjs_quoted__.fprintf(port3749,if_res2351,running_name(this3748));}),M0.cons(M0.prop_procedure,function(this3751) {var name3752 = running_name(this3751);if (name3752) {var if_res2350 = M0.error($rjs_core.Symbol.make("force"),"reentrant promise `~.s'",name3752);} else {var if_res2350 = M0.error($rjs_core.Symbol.make("force"),"reentrant promise");}return if_res2350;})),M0.current_inspector(),false,$rjs_core.Pair.makeList(0),false,$rjs_core.Symbol.make("running"));var struct_3743 = let_result2352.getAt(0);var make_3744 = let_result2352.getAt(1);var _p3745 = let_result2352.getAt(2);var _ref3746 = let_result2352.getAt(3);var _set_bang_3747 = let_result2352.getAt(4);var let_result2353 = M0.values(struct_3743,make_3744,_p3745,M0.make_struct_field_accessor(_ref3746,0,$rjs_core.Symbol.make("name")));var struct_running = let_result2353.getAt(0);var make_running = let_result2353.getAt(1);var running_p = let_result2353.getAt(2);var running_name = let_result2353.getAt(3);var promise_forced_p = function(promise3753) {if (promise_p(promise3753)) {var v3754 = M2.unsafe_struct_ref(promise3753,0);var or_part3755 = M0.not(M0.procedure_p(v3754));if (or_part3755) {var if_res2354 = or_part3755;} else {var if_res2354 = reraise_p(v3754);}var if_res2355 = if_res2354;} else {var if_res2355 = M0.raise_argument_error($rjs_core.Symbol.make("promise-forced?"),"promise?",promise3753);}return if_res2355;};var promise_running_p = function(promise3756) {if (promise_p(promise3756)) {var if_res2356 = running_p(M2.unsafe_struct_ref(promise3756,0));} else {var if_res2356 = M0.raise_argument_error($rjs_core.Symbol.make("promise-running?"),"promise?",promise3756);}return if_res2356;};var __rjs_quoted__ = {};__rjs_quoted__.make_promise = make_promise;__rjs_quoted__.struct_composable_promise = struct_composable_promise;__rjs_quoted__.make_running = make_running;__rjs_quoted__.running_p = running_p;__rjs_quoted__.lazy = lazy;__rjs_quoted__.promise_p = promise_p;__rjs_quoted__.struct_promise = struct_promise;__rjs_quoted__.reraise_p = reraise_p;__rjs_quoted__.struct_reraise = struct_reraise;__rjs_quoted__.delay = delay;__rjs_quoted__.set_promise_val_bang_ = set_promise_val_bang_;__rjs_quoted__.make_reraise = make_reraise;__rjs_quoted__.struct_running = struct_running;__rjs_quoted__.composable_promise_p = composable_promise_p;__rjs_quoted__.make_composable_promise = make_composable_promise;__rjs_quoted__.promise_val = promise_val;__rjs_quoted__.reraise_val = reraise_val;__rjs_quoted__.running_name = running_name;export { __rjs_quoted__,promise_printer,promise_forcer,reify_result,prop_force,promise_running_p,promise_forced_p,promise_p,force };