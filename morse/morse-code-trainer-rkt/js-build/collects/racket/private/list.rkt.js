import * as $rjs_core from '../../../runtime/core.js';import * as M0 from "./kw.rkt.js";import * as M1 from "./map.rkt.js";import * as M2 from "../../../runtime/kernel.rkt.js";import * as M3 from "./reverse.rkt.js";import * as M4 from "./norm-arity.rkt.js";import * as M5 from "./pre-base.rkt.js";import * as M6 from "./sort.rkt.js";import * as M7 from "../../../runtime/unsafe.rkt.js";var sort7 = function(cache_keys_p22582, cache_keys_p42583, key12584, key32585, lst52586, less_p62587) {var lst2588 = lst52586;var less_p2589 = less_p62587;if (key32585) {var if_res1506 = key12584;} else {var if_res1506 = false;}var getkey2590 = if_res1506;if (cache_keys_p42583) {var if_res1507 = cache_keys_p22582;} else {var if_res1507 = false;}var cache_keys_p2591 = if_res1507;if (M2.list_p(lst2588)) {var if_res1508 = M2.rvoid();} else {var if_res1508 = M2.raise_argument_error($rjs_core.Symbol.make("sort"),"list?",lst2588);}if_res1508;if (M2.procedure_p(less_p2589)) {var if_res1509 = M2.procedure_arity_includes_p(less_p2589,2);} else {var if_res1509 = false;}if (if_res1509) {var if_res1510 = M2.rvoid();} else {var if_res1510 = M2.raise_argument_error($rjs_core.Symbol.make("sort"),"(any/c any/c . -> . any/c)",less_p2589);}if_res1510;if (getkey2590) {if (M2.procedure_p(getkey2590)) {var if_res1511 = M2.procedure_arity_includes_p(getkey2590,1);} else {var if_res1511 = false;}var if_res1512 = M2.not(if_res1511);} else {var if_res1512 = false;}if (if_res1512) {var if_res1513 = M2.raise_argument_error($rjs_core.Symbol.make("sort"),"(any/c . -> . any/c)",getkey2590);} else {var if_res1513 = M2.rvoid();}if_res1513;if (getkey2590) {var if_res1514 = M6.sort(lst2588,less_p2589,getkey2590,cache_keys_p2591);} else {var if_res1514 = M6.sort(lst2588,less_p2589);}return if_res1514;};var unpack8 = function(given_kws2592, given_args2593, lst52594, less_p62595) {if (M2.pair_p(given_kws2592)) {var if_res1515 = M2.eq_p($rjs_core.Keyword.make('#:cache-keys?'),M2.car(given_kws2592));} else {var if_res1515 = false;}var cache_keys_p42596 = if_res1515;if (cache_keys_p42596) {var if_res1516 = M2.car(given_args2593);} else {var if_res1516 = M2.rvoid();}var cache_keys_p22597 = if_res1516;if (cache_keys_p42596) {var if_res1517 = M2.cdr(given_kws2592);} else {var if_res1517 = given_kws2592;}var given_kws2598 = if_res1517;if (cache_keys_p42596) {var if_res1518 = M2.cdr(given_args2593);} else {var if_res1518 = given_args2593;}var given_args2599 = if_res1518;var key32600 = M2.pair_p(given_kws2598);if (key32600) {var if_res1519 = M2.car(given_args2599);} else {var if_res1519 = M2.rvoid();}var key12601 = if_res1519;return sort7(cache_keys_p22597,cache_keys_p42596,key12601,key32600,lst52594,less_p62595);};var cl1522 = function(given_kws2608, given_args2609, lst2610, less_p2611) {return unpack8(given_kws2608,given_args2609,lst2610,less_p2611);};var temp1524 = $rjs_core.attachProcedureArity(function() {var fixed_lam1523 = {'4':cl1522}[arguments.length];if (fixed_lam1523!==undefined) {return fixed_lam1523.apply(null,arguments);} else {return M2.error("case-lambda: invalid case");}},[4]);var cl1520 = function(lst2613, less_p2614) {return unpack8(M2.rnull,M2.rnull,lst2613,less_p2614);};var sort2612 = $rjs_core.attachProcedureArity(function() {var fixed_lam1521 = {'2':cl1520}[arguments.length];if (fixed_lam1521!==undefined) {return fixed_lam1521.apply(null,arguments);} else {return M2.error("case-lambda: invalid case");}},[2]);var sort9 = M0.__rjs_quoted__.make_optional_keyword_procedure(function(given_kws2602, given_argc2603) {if (M2._eq_(given_argc2603,4)) {var l12604 = given_kws2602;if (M2.null_p(l12604)) {var if_res1526 = l12604;} else {if (M2.eq_p(M2.car(l12604),$rjs_core.Keyword.make('#:cache-keys?'))) {var if_res1525 = M2.cdr(l12604);} else {var if_res1525 = l12604;}var if_res1526 = if_res1525;}var l12605 = if_res1526;var l12606 = l12605;if (M2.null_p(l12606)) {var if_res1528 = l12606;} else {if (M2.eq_p(M2.car(l12606),$rjs_core.Keyword.make('#:key'))) {var if_res1527 = M2.cdr(l12606);} else {var if_res1527 = l12606;}var if_res1528 = if_res1527;}var l12607 = if_res1528;var if_res1529 = M2.null_p(l12607);} else {var if_res1529 = false;}return if_res1529;},temp1524,M2.rnull,$rjs_core.Pair.makeList($rjs_core.Keyword.make('#:cache-keys?'), $rjs_core.Keyword.make('#:key')),sort2612);var do_remove = function(who2615, item2616, list2617, equal_p2618) {if (M2.list_p(list2617)) {var if_res1530 = M2.rvoid();} else {var if_res1530 = M2.raise_argument_error(who2615,"list?",list2617);}if_res1530;var loop2619 = function(list2620) {if (M2.null_p(list2620)) {var if_res1532 = M2.rnull;} else {if (equal_p2618(item2616,M2.car(list2620))) {var if_res1531 = M2.cdr(list2620);} else {var if_res1531 = M2.cons(M2.car(list2620),loop2619(M2.cdr(list2620)));}var if_res1532 = if_res1531;}return if_res1532;};return loop2619(list2617);};var cl1533 = function(item2621, list2622) {return do_remove($rjs_core.Symbol.make("remove"),item2621,list2622,M2.equal_p);};var cl1534 = function(item2623, list2624, equal_p2625) {if (M2.procedure_p(equal_p2625)) {var if_res1536 = M2.procedure_arity_includes_p(equal_p2625,2);} else {var if_res1536 = false;}if (if_res1536) {var if_res1537 = M2.rvoid();} else {var if_res1537 = M2.raise_argument_error($rjs_core.Symbol.make("remove"),"(any/c any/c . -> . any/c)",equal_p2625);}if_res1537;return do_remove($rjs_core.Symbol.make("remove"),item2623,list2624,equal_p2625);};var remove = $rjs_core.attachProcedureArity(function() {var fixed_lam1535 = {'2':cl1533,'3':cl1534}[arguments.length];if (fixed_lam1535!==undefined) {return fixed_lam1535.apply(null,arguments);} else {return M2.error("case-lambda: invalid case");}},[2,3]);var remq = function(item2626, list2627) {return do_remove($rjs_core.Symbol.make("remq"),item2626,list2627,M2.eq_p);};var remv = function(item2628, list2629) {return do_remove($rjs_core.Symbol.make("remv"),item2628,list2629,M2.eqv_p);};var do_remove_times_ = function(who2630, l2631, r2632, equal_p2633) {if (M2.list_p(l2631)) {var if_res1538 = M2.rvoid();} else {var if_res1538 = M2.raise_argument_error(who2630,"list?",l2631);}if_res1538;if (M2.list_p(r2632)) {var if_res1539 = M2.rvoid();} else {var if_res1539 = M2.raise_argument_error(who2630,"list?",r2632);}if_res1539;var rloop2634 = function(r2635) {if (M2.null_p(r2635)) {var if_res1542 = M2.rnull;} else {var first_r2636 = M2.car(r2635);var loop2637 = function(l_rest2638) {if (M2.null_p(l_rest2638)) {var if_res1541 = M2.cons(first_r2636,rloop2634(M2.cdr(r2635)));} else {if (equal_p2633(M2.car(l_rest2638),first_r2636)) {var if_res1540 = rloop2634(M2.cdr(r2635));} else {var if_res1540 = loop2637(M2.cdr(l_rest2638));}var if_res1541 = if_res1540;}return if_res1541;};var if_res1542 = loop2637(l2631);}return if_res1542;};return rloop2634(r2632);};var cl1543 = function(l2639, r2640) {return do_remove_times_($rjs_core.Symbol.make("remove*"),l2639,r2640,M2.equal_p);};var cl1544 = function(l2641, r2642, equal_p2643) {if (M2.procedure_p(equal_p2643)) {var if_res1546 = M2.procedure_arity_includes_p(equal_p2643,2);} else {var if_res1546 = false;}if (if_res1546) {var if_res1547 = M2.rvoid();} else {var if_res1547 = M2.raise_argument_error($rjs_core.Symbol.make("remove*"),"(any/c any/c . -> . any/c)",equal_p2643);}if_res1547;return do_remove_times_($rjs_core.Symbol.make("remove*"),l2641,r2642,equal_p2643);};var remove_times_ = $rjs_core.attachProcedureArity(function() {var fixed_lam1545 = {'2':cl1543,'3':cl1544}[arguments.length];if (fixed_lam1545!==undefined) {return fixed_lam1545.apply(null,arguments);} else {return M2.error("case-lambda: invalid case");}},[2,3]);var remq_times_ = function(l2644, r2645) {return do_remove_times_($rjs_core.Symbol.make("remq*"),l2644,r2645,M2.eq_p);};var remv_times_ = function(l2646, r2647) {return do_remove_times_($rjs_core.Symbol.make("remv*"),l2646,r2647,M2.eqv_p);};var memf = function(f2648, list2649) {if (M2.procedure_p(f2648)) {var if_res1548 = M2.procedure_arity_includes_p(f2648,1);} else {var if_res1548 = false;}if (if_res1548) {var if_res1549 = M2.rvoid();} else {var if_res1549 = M2.raise_argument_error($rjs_core.Symbol.make("memf"),"(any/c . -> any/c)",f2648);}if_res1549;var loop2650 = function(l2651) {if (M2.null_p(l2651)) {var if_res1552 = false;} else {if (M2.not(M2.pair_p(l2651))) {var if_res1551 = M2.raise_mismatch_error($rjs_core.Symbol.make("memf"),"not a proper list: ",list2649);} else {if (f2648(M2.car(l2651))) {var if_res1550 = l2651;} else {var if_res1550 = loop2650(M2.cdr(l2651));}var if_res1551 = if_res1550;}var if_res1552 = if_res1551;}return if_res1552;};return loop2650(list2649);};var findf = function(f2652, list2653) {if (M2.procedure_p(f2652)) {var if_res1553 = M2.procedure_arity_includes_p(f2652,1);} else {var if_res1553 = false;}if (if_res1553) {var if_res1554 = M2.rvoid();} else {var if_res1554 = M2.raise_argument_error($rjs_core.Symbol.make("findf"),"(any/c . -> . any/c)",f2652);}if_res1554;var loop2654 = function(l2655) {if (M2.null_p(l2655)) {var if_res1557 = false;} else {if (M2.not(M2.pair_p(l2655))) {var if_res1556 = M2.raise_mismatch_error($rjs_core.Symbol.make("findf"),"not a proper list: ",list2653);} else {var a2656 = M2.car(l2655);if (f2652(a2656)) {var if_res1555 = a2656;} else {var if_res1555 = loop2654(M2.cdr(l2655));}var if_res1556 = if_res1555;}var if_res1557 = if_res1556;}return if_res1557;};return loop2654(list2653);};var bad_list = function(who2657, orig_l2658) {return M2.raise_mismatch_error(who2657,"not a proper list: ",orig_l2658);};var bad_item = function(who2659, a2660, orig_l2661) {return M2.raise_mismatch_error(who2659,"non-pair found in list: ",a2660," in ",orig_l2661);};var assq2662 = function(x2666, l2667) {var loop2668 = function(l2669, t2670) {if (M2.pair_p(l2669)) {var a2671 = M7.unsafe_car(l2669);if (M2.pair_p(a2671)) {if (M2.eq_p(x2666,M7.unsafe_car(a2671))) {var if_res1563 = a2671;} else {var l2672 = M7.unsafe_cdr(l2669);if (M2.pair_p(l2672)) {var a2673 = M7.unsafe_car(l2672);if (M2.pair_p(a2673)) {if (M2.eq_p(x2666,M7.unsafe_car(a2673))) {var if_res1559 = a2673;} else {var t2674 = M7.unsafe_cdr(t2670);var l2675 = M7.unsafe_cdr(l2672);if (M2.eq_p(l2675,t2674)) {var if_res1558 = bad_list($rjs_core.Symbol.make("assq"),l2667);} else {var if_res1558 = loop2668(l2675,t2674);}var if_res1559 = if_res1558;}var if_res1560 = if_res1559;} else {var if_res1560 = bad_item($rjs_core.Symbol.make("assq"),a2673,l2667);}var if_res1562 = if_res1560;} else {if (M2.null_p(l2672)) {var if_res1561 = false;} else {var if_res1561 = bad_list($rjs_core.Symbol.make("assq"),l2667);}var if_res1562 = if_res1561;}var if_res1563 = if_res1562;}var if_res1564 = if_res1563;} else {var if_res1564 = bad_item($rjs_core.Symbol.make("assq"),a2671,l2667);}var if_res1566 = if_res1564;} else {if (M2.null_p(l2669)) {var if_res1565 = false;} else {var if_res1565 = bad_list($rjs_core.Symbol.make("assq"),l2667);}var if_res1566 = if_res1565;}return if_res1566;};return loop2668(l2667,l2667);};var assv2663 = function(x2676, l2677) {var loop2678 = function(l2679, t2680) {if (M2.pair_p(l2679)) {var a2681 = M7.unsafe_car(l2679);if (M2.pair_p(a2681)) {if (M2.eqv_p(x2676,M7.unsafe_car(a2681))) {var if_res1572 = a2681;} else {var l2682 = M7.unsafe_cdr(l2679);if (M2.pair_p(l2682)) {var a2683 = M7.unsafe_car(l2682);if (M2.pair_p(a2683)) {if (M2.eqv_p(x2676,M7.unsafe_car(a2683))) {var if_res1568 = a2683;} else {var t2684 = M7.unsafe_cdr(t2680);var l2685 = M7.unsafe_cdr(l2682);if (M2.eq_p(l2685,t2684)) {var if_res1567 = bad_list($rjs_core.Symbol.make("assv"),l2677);} else {var if_res1567 = loop2678(l2685,t2684);}var if_res1568 = if_res1567;}var if_res1569 = if_res1568;} else {var if_res1569 = bad_item($rjs_core.Symbol.make("assv"),a2683,l2677);}var if_res1571 = if_res1569;} else {if (M2.null_p(l2682)) {var if_res1570 = false;} else {var if_res1570 = bad_list($rjs_core.Symbol.make("assv"),l2677);}var if_res1571 = if_res1570;}var if_res1572 = if_res1571;}var if_res1573 = if_res1572;} else {var if_res1573 = bad_item($rjs_core.Symbol.make("assv"),a2681,l2677);}var if_res1575 = if_res1573;} else {if (M2.null_p(l2679)) {var if_res1574 = false;} else {var if_res1574 = bad_list($rjs_core.Symbol.make("assv"),l2677);}var if_res1575 = if_res1574;}return if_res1575;};return loop2678(l2677,l2677);};var cl1576 = function(x2686, l2687) {var loop2688 = function(l2689, t2690) {if (M2.pair_p(l2689)) {var a2691 = M7.unsafe_car(l2689);if (M2.pair_p(a2691)) {if (M2.equal_p(x2686,M7.unsafe_car(a2691))) {var if_res1584 = a2691;} else {var l2692 = M7.unsafe_cdr(l2689);if (M2.pair_p(l2692)) {var a2693 = M7.unsafe_car(l2692);if (M2.pair_p(a2693)) {if (M2.equal_p(x2686,M7.unsafe_car(a2693))) {var if_res1580 = a2693;} else {var t2694 = M7.unsafe_cdr(t2690);var l2695 = M7.unsafe_cdr(l2692);if (M2.eq_p(l2695,t2694)) {var if_res1579 = bad_list($rjs_core.Symbol.make("assoc"),l2687);} else {var if_res1579 = loop2688(l2695,t2694);}var if_res1580 = if_res1579;}var if_res1581 = if_res1580;} else {var if_res1581 = bad_item($rjs_core.Symbol.make("assoc"),a2693,l2687);}var if_res1583 = if_res1581;} else {if (M2.null_p(l2692)) {var if_res1582 = false;} else {var if_res1582 = bad_list($rjs_core.Symbol.make("assoc"),l2687);}var if_res1583 = if_res1582;}var if_res1584 = if_res1583;}var if_res1585 = if_res1584;} else {var if_res1585 = bad_item($rjs_core.Symbol.make("assoc"),a2691,l2687);}var if_res1587 = if_res1585;} else {if (M2.null_p(l2689)) {var if_res1586 = false;} else {var if_res1586 = bad_list($rjs_core.Symbol.make("assoc"),l2687);}var if_res1587 = if_res1586;}return if_res1587;};return loop2688(l2687,l2687);};var cl1577 = function(x2696, l2697, is_equal_p2698) {if (M2.procedure_p(is_equal_p2698)) {var if_res1588 = M2.procedure_arity_includes_p(is_equal_p2698,2);} else {var if_res1588 = false;}if (if_res1588) {var if_res1589 = M2.rvoid();} else {var if_res1589 = M2.raise_argument_error($rjs_core.Symbol.make("assoc"),"(any/c any/c . -> . any/c)",is_equal_p2698);}if_res1589;var loop2699 = function(l2700, t2701) {if (M2.pair_p(l2700)) {var a2702 = M7.unsafe_car(l2700);if (M2.pair_p(a2702)) {if (is_equal_p2698(x2696,M7.unsafe_car(a2702))) {var if_res1595 = a2702;} else {var l2703 = M7.unsafe_cdr(l2700);if (M2.pair_p(l2703)) {var a2704 = M7.unsafe_car(l2703);if (M2.pair_p(a2704)) {if (is_equal_p2698(x2696,M7.unsafe_car(a2704))) {var if_res1591 = a2704;} else {var t2705 = M7.unsafe_cdr(t2701);var l2706 = M7.unsafe_cdr(l2703);if (M2.eq_p(l2706,t2705)) {var if_res1590 = bad_list($rjs_core.Symbol.make("assoc"),l2697);} else {var if_res1590 = loop2699(l2706,t2705);}var if_res1591 = if_res1590;}var if_res1592 = if_res1591;} else {var if_res1592 = bad_item($rjs_core.Symbol.make("assoc"),a2704,l2697);}var if_res1594 = if_res1592;} else {if (M2.null_p(l2703)) {var if_res1593 = false;} else {var if_res1593 = bad_list($rjs_core.Symbol.make("assoc"),l2697);}var if_res1594 = if_res1593;}var if_res1595 = if_res1594;}var if_res1596 = if_res1595;} else {var if_res1596 = bad_item($rjs_core.Symbol.make("assoc"),a2702,l2697);}var if_res1598 = if_res1596;} else {if (M2.null_p(l2700)) {var if_res1597 = false;} else {var if_res1597 = bad_list($rjs_core.Symbol.make("assoc"),l2697);}var if_res1598 = if_res1597;}return if_res1598;};return loop2699(l2697,l2697);};var assoc2664 = $rjs_core.attachProcedureArity(function() {var fixed_lam1578 = {'2':cl1576,'3':cl1577}[arguments.length];if (fixed_lam1578!==undefined) {return fixed_lam1578.apply(null,arguments);} else {return M2.error("case-lambda: invalid case");}},[2,3]);var assf2665 = function(f2707, l2708) {if (M2.procedure_p(f2707)) {var if_res1599 = M2.procedure_arity_includes_p(f2707,1);} else {var if_res1599 = false;}if (if_res1599) {var if_res1600 = M2.rvoid();} else {var if_res1600 = M2.raise_argument_error($rjs_core.Symbol.make("assf"),"(any/c any/c . -> . any/c)",f2707);}if_res1600;var loop2709 = function(l2710, t2711) {if (M2.pair_p(l2710)) {var a2712 = M7.unsafe_car(l2710);if (M2.pair_p(a2712)) {if ((function(_2713, a2714) {return f2707(a2714);})(false,M7.unsafe_car(a2712))) {var if_res1606 = a2712;} else {var l2715 = M7.unsafe_cdr(l2710);if (M2.pair_p(l2715)) {var a2716 = M7.unsafe_car(l2715);if (M2.pair_p(a2716)) {if ((function(_2717, a2718) {return f2707(a2718);})(false,M7.unsafe_car(a2716))) {var if_res1602 = a2716;} else {var t2719 = M7.unsafe_cdr(t2711);var l2720 = M7.unsafe_cdr(l2715);if (M2.eq_p(l2720,t2719)) {var if_res1601 = bad_list($rjs_core.Symbol.make("assf"),l2708);} else {var if_res1601 = loop2709(l2720,t2719);}var if_res1602 = if_res1601;}var if_res1603 = if_res1602;} else {var if_res1603 = bad_item($rjs_core.Symbol.make("assf"),a2716,l2708);}var if_res1605 = if_res1603;} else {if (M2.null_p(l2715)) {var if_res1604 = false;} else {var if_res1604 = bad_list($rjs_core.Symbol.make("assf"),l2708);}var if_res1605 = if_res1604;}var if_res1606 = if_res1605;}var if_res1607 = if_res1606;} else {var if_res1607 = bad_item($rjs_core.Symbol.make("assf"),a2712,l2708);}var if_res1609 = if_res1607;} else {if (M2.null_p(l2710)) {var if_res1608 = false;} else {var if_res1608 = bad_list($rjs_core.Symbol.make("assf"),l2708);}var if_res1609 = if_res1608;}return if_res1609;};return loop2709(l2708,l2708);};var let_result1610 = M2.values(assq2662,assv2663,assoc2664,assf2665);var assq = let_result1610.getAt(0);var assv = let_result1610.getAt(1);var assoc = let_result1610.getAt(2);var assf = let_result1610.getAt(3);var mapadd = function(f2721, l2722, last2723) {var loop2724 = function(l2725) {if (M2.null_p(l2725)) {var if_res1611 = M2.list(last2723);} else {var if_res1611 = M2.cons(f2721(M2.car(l2725)),loop2724(M2.cdr(l2725)));}return if_res1611;};return loop2724(l2722);};var check_fold = function(name2726, proc2727, init2728, l2729, more2730) {if (M2.procedure_p(proc2727)) {var if_res1612 = M2.rvoid();} else {var if_res1612 = M2.apply(M2.raise_argument_error,name2726,"procedure?",0,proc2727,init2728,l2729,more2730);}if_res1612;if (M2.list_p(l2729)) {var if_res1613 = M2.rvoid();} else {var if_res1613 = M2.apply(M2.raise_argument_error,name2726,"list?",2,proc2727,init2728,l2729,more2730);}if_res1613;if (M2.null_p(more2730)) {if (M2.procedure_arity_includes_p(proc2727,2)) {var if_res1614 = M2.rvoid();} else {var if_res1614 = M2.raise_mismatch_error(name2726,"given procedure does not accept 2 arguments: ",proc2727);}var if_res1619 = if_res1614;} else {var len2731 = M2.length(l2729);var loop2732 = function(more2733, n2734) {if (M2.null_p(more2733)) {var if_res1617 = M2.rvoid();} else {if (M2.list_p(M2.car(more2733))) {var if_res1615 = M2.rvoid();} else {var if_res1615 = M2.apply(M2.raise_argument_error,name2726,"list?",n2734,proc2727,init2728,l2729,more2733);}if_res1615;if (M2._eq_(len2731,M2.length(M2.car(more2733)))) {var if_res1616 = M2.rvoid();} else {var if_res1616 = M2.raise_mismatch_error(name2726,"given list does not have the same size as the first list: ",M2.car(more2733));}if_res1616;var if_res1617 = loop2732(M2.cdr(more2733),M2.add1(n2734));}return if_res1617;};loop2732(more2730,3);if (M2.procedure_arity_includes_p(proc2727,2+M2.length(more2730))) {var if_res1618 = M2.rvoid();} else {var if_res1618 = M2.raise_mismatch_error(name2726,M2.format("given procedure does not accept ~a arguments: ",2+M2.length(more2730)),proc2727);}var if_res1619 = if_res1618;}return if_res1619;};var cl1620 = function(f2735, init2736, l2737) {check_fold($rjs_core.Symbol.make("foldl"),f2735,init2736,l2737,M2.rnull);var loop2738 = function(init2739, l2740) {if (M2.null_p(l2740)) {var if_res1624 = init2739;} else {var if_res1624 = loop2738(f2735(M2.car(l2740),init2739),M2.cdr(l2740));}return if_res1624;};return loop2738(init2736,l2737);};var cl1621 = $rjs_core.attachProcedureArity(function(f2741, init2742, l2743) {var ls2744 = $rjs_core.Pair.listFromArray($rjs_core.argumentsSlice($rjs_core.argumentsToArray(arguments),3));check_fold($rjs_core.Symbol.make("foldl"),f2741,init2742,l2743,ls2744);var loop2745 = function(init2746, ls2747) {if (M2.pair_p(M2.car(ls2747))) {var if_res1625 = loop2745(M2.apply(f2741,mapadd(M2.car,ls2747,init2746)),M1.map(M2.cdr,ls2747));} else {var if_res1625 = init2746;}return if_res1625;};return loop2745(init2742,M2.cons(l2743,ls2744));});var foldl = $rjs_core.attachProcedureArity(function() {var fixed_lam1622 = {'3':cl1620}[arguments.length];if (fixed_lam1622!==undefined) {return fixed_lam1622.apply(null,arguments);} else {if (M2._gt__eq_(cl1621.length,1)) {var if_res1623 = cl1621.apply(null,arguments);} else {var if_res1623 = M2.error("case-lambda: invalid case");}return if_res1623;}},[M2.make_arity_at_least(3)]);var cl1626 = function(f2748, init2749, l2750) {check_fold($rjs_core.Symbol.make("foldr"),f2748,init2749,l2750,M2.rnull);var loop2751 = function(init2752, l2753) {if (M2.null_p(l2753)) {var if_res1630 = init2752;} else {var if_res1630 = f2748(M2.car(l2753),loop2751(init2752,M2.cdr(l2753)));}return if_res1630;};return loop2751(init2749,l2750);};var cl1627 = $rjs_core.attachProcedureArity(function(f2754, init2755, l2756) {var ls2757 = $rjs_core.Pair.listFromArray($rjs_core.argumentsSlice($rjs_core.argumentsToArray(arguments),3));check_fold($rjs_core.Symbol.make("foldr"),f2754,init2755,l2756,ls2757);var loop2758 = function(ls2759) {if (M2.pair_p(M2.car(ls2759))) {var if_res1631 = M2.apply(f2754,mapadd(M2.car,ls2759,loop2758(M1.map(M2.cdr,ls2759))));} else {var if_res1631 = init2755;}return if_res1631;};return loop2758(M2.cons(l2756,ls2757));});var foldr = $rjs_core.attachProcedureArity(function() {var fixed_lam1628 = {'3':cl1626}[arguments.length];if (fixed_lam1628!==undefined) {return fixed_lam1628.apply(null,arguments);} else {if (M2._gt__eq_(cl1627.length,1)) {var if_res1629 = cl1627.apply(null,arguments);} else {var if_res1629 = M2.error("case-lambda: invalid case");}return if_res1629;}},[M2.make_arity_at_least(3)]);var filter = function(f2760, list2761) {if (M2.procedure_p(f2760)) {var if_res1632 = M2.procedure_arity_includes_p(f2760,1);} else {var if_res1632 = false;}if (if_res1632) {var if_res1633 = M2.rvoid();} else {var if_res1633 = M2.raise_argument_error($rjs_core.Symbol.make("filter"),"(any/c . -> . any/c)",f2760);}if_res1633;if (M2.list_p(list2761)) {var if_res1634 = M2.rvoid();} else {var if_res1634 = M2.raise_argument_error($rjs_core.Symbol.make("filter"),"list?",list2761);}if_res1634;var loop2762 = function(l2763, result2764) {if (M2.null_p(l2763)) {var if_res1637 = M3.alt_reverse(result2764);} else {var temp1636 = M2.cdr(l2763);if (f2760(M2.car(l2763))) {var if_res1635 = M2.cons(M2.car(l2763),result2764);} else {var if_res1635 = result2764;}var if_res1637 = loop2762(temp1636,if_res1635);}return if_res1637;};return loop2762(list2761,M2.rnull);};var build_vector = function(n2765, fcn2766) {if (M2.exact_nonnegative_integer_p(n2765)) {var if_res1638 = M2.rvoid();} else {var if_res1638 = M2.raise_argument_error($rjs_core.Symbol.make("build-vector"),"exact-nonnegative-integer?",n2765);}if_res1638;if (M2.procedure_p(fcn2766)) {var if_res1639 = M2.procedure_arity_includes_p(fcn2766,1);} else {var if_res1639 = false;}if (if_res1639) {var if_res1640 = M2.rvoid();} else {var if_res1640 = M2.raise_argument_error($rjs_core.Symbol.make("build-vector"),"(exact-nonnegative-integer? . -> . any/c)",fcn2766);}if_res1640;var vec2767 = M2.make_vector(n2765);var loop2768 = function(i2769) {if (M2._eq_(i2769,n2765)) {var if_res1641 = vec2767;} else {M2.vector_set_bang_(vec2767,i2769,fcn2766(i2769));var if_res1641 = loop2768(M2.add1(i2769));}return if_res1641;};return loop2768(0);};var build_string = function(n2770, fcn2771) {if (M2.exact_nonnegative_integer_p(n2770)) {var if_res1642 = M2.rvoid();} else {var if_res1642 = M2.raise_argument_error($rjs_core.Symbol.make("build-string"),"exact-nonnegative-integer?",n2770);}if_res1642;if (M2.procedure_p(fcn2771)) {var if_res1643 = M2.procedure_arity_includes_p(fcn2771,1);} else {var if_res1643 = false;}if (if_res1643) {var if_res1644 = M2.rvoid();} else {var if_res1644 = M2.raise_argument_error($rjs_core.Symbol.make("build-string"),"(exact-nonnegative-integer? . -> . char?)",fcn2771);}if_res1644;var str2772 = M2.make_string(n2770);var loop2773 = function(i2774) {if (M2._eq_(i2774,n2770)) {var if_res1645 = str2772;} else {M2.string_set_bang_(str2772,i2774,fcn2771(i2774));var if_res1645 = loop2773(M2.add1(i2774));}return if_res1645;};return loop2773(0);};var build_list = function(n2775, fcn2776) {if (M2.exact_nonnegative_integer_p(n2775)) {var if_res1646 = M2.rvoid();} else {var if_res1646 = M2.raise_argument_error($rjs_core.Symbol.make("build-list"),"exact-nonnegative-integer?",n2775);}if_res1646;if (M2.procedure_p(fcn2776)) {var if_res1647 = M2.procedure_arity_includes_p(fcn2776,1);} else {var if_res1647 = false;}if (if_res1647) {var if_res1648 = M2.rvoid();} else {var if_res1648 = M2.raise_argument_error($rjs_core.Symbol.make("build-list"),"(exact-nonnegative-integer? . -> . any/c)",fcn2776);}if_res1648;var recr2777 = function(j2778, i2779) {if (M2.zero_p(i2779)) {var if_res1649 = M2.rnull;} else {var if_res1649 = M2.cons(fcn2776(j2778),recr2777(M2.add1(j2778),M2.sub1(i2779)));}return if_res1649;};return recr2777(0,n2775);};var pipeline12780 = function(f2781, rfuns2782) {return function(x2783) {var loop2784 = function(x2785, f2786, rfuns2787) {if (M2.null_p(rfuns2787)) {var if_res1650 = f2786(x2785);} else {var if_res1650 = loop2784(f2786(x2785),M2.car(rfuns2787),M2.cdr(rfuns2787));}return if_res1650;};return loop2784(x2783,f2781,rfuns2782);};};var pipeline_times_2788 = function(f2789, rfuns2790) {if (M2.eqv_p(1,M4.norm_procedure_arity(f2789))) {var loop2791 = function(f2792, rfuns2793) {if (M2.null_p(rfuns2793)) {var if_res1652 = f2792;} else {var fst2794 = M2.car(rfuns2793);if (M2.eqv_p(1,M4.norm_procedure_arity(fst2794))) {var if_res1651 = function(x2795) {return fst2794(f2792(x2795));};} else {var if_res1651 = function(x2796) {return M2.call_with_values(function() {return f2792(x2796);},fst2794);};}var if_res1652 = loop2791(if_res1651,M2.cdr(rfuns2793));}return if_res1652;};var if_res1657 = loop2791(f2789,rfuns2790);} else {var funs2797 = M3.alt_reverse(M2.cons(f2789,rfuns2790));var loop2798 = function(f2799, funs2800) {if (M2.null_p(funs2800)) {var if_res1656 = f2799;} else {var fst2801 = M2.car(funs2800);if (M2.eqv_p(1,M4.norm_procedure_arity(f2799))) {if (M2.eqv_p(1,M4.norm_procedure_arity(fst2801))) {var if_res1653 = function(x2802) {return f2799(fst2801(x2802));};} else {var if_res1653 = $rjs_core.attachProcedureArity(function() {var xs2803 = $rjs_core.Pair.listFromArray($rjs_core.argumentsToArray(arguments));return f2799(M2.apply(fst2801,xs2803));});}var if_res1655 = if_res1653;} else {if (M2.eqv_p(1,M4.norm_procedure_arity(fst2801))) {var if_res1654 = function(x2804) {return M2.call_with_values(function() {return fst2801(x2804);},f2799);};} else {var if_res1654 = $rjs_core.attachProcedureArity(function() {var xs2805 = $rjs_core.Pair.listFromArray($rjs_core.argumentsToArray(arguments));return M2.call_with_values(function() {return M2.apply(fst2801,xs2805);},f2799);});}var if_res1655 = if_res1654;}var if_res1656 = loop2798(if_res1655,M2.cdr(funs2800));}return if_res1656;};var if_res1657 = loop2798(M2.car(funs2797),M2.cdr(funs2797));}return if_res1657;};var simple_compose2807 = function(f2808, g2809) {var arity2810 = M4.norm_procedure_arity(g2809);var let_result1658 = M0.procedure_keywords(g2809);var required_kwds2811 = let_result1658.getAt(0);var allowed_kwds2812 = let_result1658.getAt(1);if (M2.eq_p(1,arity2810)) {var if_res1664 = function(x2814) {return f2808(g2809(x2814));};} else {var cl1659 = function(x2815) {return f2808(g2809(x2815));};var cl1660 = function(x2816, y2817) {return f2808(g2809(x2816,y2817));};var cl1661 = $rjs_core.attachProcedureArity(function() {var args2818 = $rjs_core.Pair.listFromArray($rjs_core.argumentsToArray(arguments));return f2808(M2.apply(g2809,args2818));});var if_res1664 = $rjs_core.attachProcedureArity(function() {var fixed_lam1662 = {'1':cl1659,'2':cl1660}[arguments.length];if (fixed_lam1662!==undefined) {return fixed_lam1662.apply(null,arguments);} else {if (true) {var if_res1663 = cl1661.apply(null,arguments);} else {var if_res1663 = M2.error("case-lambda: invalid case");}return if_res1663;}},[M2.make_arity_at_least(0)]);}var composed2813 = if_res1664;if (M2.null_p(allowed_kwds2812)) {var if_res1665 = composed2813;} else {var if_res1665 = M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws2819, kw_args2820) {var xs2821 = $rjs_core.Pair.listFromArray($rjs_core.argumentsSlice($rjs_core.argumentsToArray(arguments),2));return f2808(M5.keyword_apply(g2809,kws2819,kw_args2820,xs2821));}),composed2813);}return if_res1665;};var cl1666 = function(f2822) {if (M2.procedure_p(f2822)) {var if_res1672 = f2822;} else {var if_res1672 = M2.raise_argument_error($rjs_core.Symbol.make("compose1"),"procedure?",0,f2822);}return if_res1672;};var cl1667 = function(f2823, g2824) {if (M2.procedure_p(f2823)) {var if_res1673 = M2.rvoid();} else {var if_res1673 = M2.raise_argument_error($rjs_core.Symbol.make("compose1"),"procedure?",0,f2823,g2824);}if_res1673;if (M2.procedure_p(g2824)) {var if_res1674 = M2.rvoid();} else {var if_res1674 = M2.raise_argument_error($rjs_core.Symbol.make("compose1"),"procedure?",1,f2823,g2824);}if_res1674;if (M2.procedure_arity_includes_p(f2823,1)) {var if_res1675 = M2.rvoid();} else {var if_res1675 = M2.apply(M2.raise_argument_error,$rjs_core.Symbol.make("compose1"),"(any/c . -> . any/c)",0,f2823,$rjs_core.Pair.Empty);}if_res1675;var let_result1676 = M0.procedure_keywords(f2823);var req2825 = let_result1676.getAt(0);var _2826 = let_result1676.getAt(1);if (M2.null_p(req2825)) {var if_res1677 = M2.rvoid();} else {var if_res1677 = M2.apply(M2.raise_argument_error,$rjs_core.Symbol.make("compose1"),"procedure-with-no-required-keywords?",0,f2823,$rjs_core.Pair.Empty);}if_res1677;return simple_compose2807(f2823,g2824);};var cl1668 = function() {return M2.values;};var cl1669 = $rjs_core.attachProcedureArity(function(f02827) {var fs02828 = $rjs_core.Pair.listFromArray($rjs_core.argumentsSlice($rjs_core.argumentsToArray(arguments),1));var loop2829 = function(f2830, fs2831, i2832, rfuns2833) {if (M2.procedure_p(f2830)) {var if_res1678 = M2.rvoid();} else {var if_res1678 = M2.apply(M2.raise_argument_error,$rjs_core.Symbol.make("compose1"),"procedure?",i2832,f02827,fs02828);}if_res1678;if (M2.pair_p(fs2831)) {if (M2.procedure_arity_includes_p(f2830,1)) {var if_res1679 = M2.rvoid();} else {var if_res1679 = M2.apply(M2.raise_argument_error,$rjs_core.Symbol.make("compose1"),"(any/c . -> . any/c)",i2832,f02827,fs02828);}if_res1679;var let_result1680 = M0.procedure_keywords(f2830);var req2834 = let_result1680.getAt(0);var _2835 = let_result1680.getAt(1);if (M2.null_p(req2834)) {var if_res1681 = M2.rvoid();} else {var if_res1681 = M2.apply(M2.raise_argument_error,$rjs_core.Symbol.make("compose1"),"procedure-with-no-required-keywords?",i2832,f02827,fs02828);}if_res1681;var if_res1682 = loop2829(M2.car(fs2831),M2.cdr(fs2831),M2.add1(i2832),M2.cons(f2830,rfuns2833));} else {var if_res1682 = simple_compose2807(pipeline12780(M2.car(rfuns2833),M2.cdr(rfuns2833)),f2830);}return if_res1682;};return loop2829(f02827,fs02828,0,$rjs_core.Pair.Empty);});var compose12806 = $rjs_core.attachProcedureArity(function() {var fixed_lam1670 = {'1':cl1666,'2':cl1667,'0':cl1668}[arguments.length];if (fixed_lam1670!==undefined) {return fixed_lam1670.apply(null,arguments);} else {if (M2._gt__eq_(cl1669.length,1)) {var if_res1671 = cl1669.apply(null,arguments);} else {var if_res1671 = M2.error("case-lambda: invalid case");}return if_res1671;}},[0,M2.make_arity_at_least(1)]);var simple_compose2837 = function(f2838, g2839) {if (M2.eqv_p(1,M4.norm_procedure_arity(f2838))) {var arity2840 = M4.norm_procedure_arity(g2839);var let_result1683 = M0.procedure_keywords(g2839);var required_kwds2841 = let_result1683.getAt(0);var allowed_kwds2842 = let_result1683.getAt(1);if (M2.eq_p(1,arity2840)) {var if_res1689 = function(x2844) {return f2838(g2839(x2844));};} else {var cl1684 = function(x2845) {return f2838(g2839(x2845));};var cl1685 = function(x2846, y2847) {return f2838(g2839(x2846,y2847));};var cl1686 = $rjs_core.attachProcedureArity(function() {var args2848 = $rjs_core.Pair.listFromArray($rjs_core.argumentsToArray(arguments));return f2838(M2.apply(g2839,args2848));});var if_res1689 = $rjs_core.attachProcedureArity(function() {var fixed_lam1687 = {'1':cl1684,'2':cl1685}[arguments.length];if (fixed_lam1687!==undefined) {return fixed_lam1687.apply(null,arguments);} else {if (true) {var if_res1688 = cl1686.apply(null,arguments);} else {var if_res1688 = M2.error("case-lambda: invalid case");}return if_res1688;}},[M2.make_arity_at_least(0)]);}var composed2843 = if_res1689;if (M2.null_p(allowed_kwds2842)) {var if_res1690 = composed2843;} else {var if_res1690 = M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws2849, kw_args2850) {var xs2851 = $rjs_core.Pair.listFromArray($rjs_core.argumentsSlice($rjs_core.argumentsToArray(arguments),2));return f2838(M5.keyword_apply(g2839,kws2849,kw_args2850,xs2851));}),composed2843);}var if_res1699 = if_res1690;} else {var arity2852 = M4.norm_procedure_arity(g2839);var let_result1691 = M0.procedure_keywords(g2839);var required_kwds2853 = let_result1691.getAt(0);var allowed_kwds2854 = let_result1691.getAt(1);if (M2.eq_p(1,arity2852)) {var if_res1697 = function(x2856) {return M2.call_with_values(function() {return g2839(x2856);},f2838);};} else {var cl1692 = function(x2857) {return M2.call_with_values(function() {return g2839(x2857);},f2838);};var cl1693 = function(x2858, y2859) {return M2.call_with_values(function() {return g2839(x2858,y2859);},f2838);};var cl1694 = $rjs_core.attachProcedureArity(function() {var args2860 = $rjs_core.Pair.listFromArray($rjs_core.argumentsToArray(arguments));return M2.call_with_values(function() {return M2.apply(g2839,args2860);},f2838);});var if_res1697 = $rjs_core.attachProcedureArity(function() {var fixed_lam1695 = {'1':cl1692,'2':cl1693}[arguments.length];if (fixed_lam1695!==undefined) {return fixed_lam1695.apply(null,arguments);} else {if (true) {var if_res1696 = cl1694.apply(null,arguments);} else {var if_res1696 = M2.error("case-lambda: invalid case");}return if_res1696;}},[M2.make_arity_at_least(0)]);}var composed2855 = if_res1697;if (M2.null_p(allowed_kwds2854)) {var if_res1698 = composed2855;} else {var if_res1698 = M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws2861, kw_args2862) {var xs2863 = $rjs_core.Pair.listFromArray($rjs_core.argumentsSlice($rjs_core.argumentsToArray(arguments),2));return M2.call_with_values(function() {return M5.keyword_apply(g2839,kws2861,kw_args2862,xs2863);},f2838);}),composed2855);}var if_res1699 = if_res1698;}return if_res1699;};var cl1700 = function(f2864) {if (M2.procedure_p(f2864)) {var if_res1706 = f2864;} else {var if_res1706 = M2.raise_argument_error($rjs_core.Symbol.make("compose"),"procedure?",0,f2864);}return if_res1706;};var cl1701 = function(f2865, g2866) {if (M2.procedure_p(f2865)) {var if_res1707 = M2.rvoid();} else {var if_res1707 = M2.raise_argument_error($rjs_core.Symbol.make("compose"),"procedure?",0,f2865,g2866);}if_res1707;if (M2.procedure_p(g2866)) {var if_res1708 = M2.rvoid();} else {var if_res1708 = M2.raise_argument_error($rjs_core.Symbol.make("compose"),"procedure?",1,f2865,g2866);}if_res1708;var let_result1709 = M0.procedure_keywords(f2865);var req2867 = let_result1709.getAt(0);var _2868 = let_result1709.getAt(1);if (M2.null_p(req2867)) {var if_res1710 = M2.rvoid();} else {var if_res1710 = M2.apply(M2.raise_argument_error,$rjs_core.Symbol.make("compose"),"procedure-with-no-required-keywords?",0,f2865,$rjs_core.Pair.Empty);}if_res1710;return simple_compose2837(f2865,g2866);};var cl1702 = function() {return M2.values;};var cl1703 = $rjs_core.attachProcedureArity(function(f02869) {var fs02870 = $rjs_core.Pair.listFromArray($rjs_core.argumentsSlice($rjs_core.argumentsToArray(arguments),1));var loop2871 = function(f2872, fs2873, i2874, rfuns2875) {if (M2.procedure_p(f2872)) {var if_res1711 = M2.rvoid();} else {var if_res1711 = M2.apply(M2.raise_argument_error,$rjs_core.Symbol.make("compose"),"procedure?",i2874,f02869,fs02870);}if_res1711;if (M2.pair_p(fs2873)) {var let_result1712 = M0.procedure_keywords(f2872);var req2876 = let_result1712.getAt(0);var _2877 = let_result1712.getAt(1);if (M2.null_p(req2876)) {var if_res1713 = M2.rvoid();} else {var if_res1713 = M2.apply(M2.raise_argument_error,$rjs_core.Symbol.make("compose"),"procedure-with-no-required-keywords?",i2874,f02869,fs02870);}if_res1713;var if_res1714 = loop2871(M2.car(fs2873),M2.cdr(fs2873),M2.add1(i2874),M2.cons(f2872,rfuns2875));} else {var if_res1714 = simple_compose2837(pipeline_times_2788(M2.car(rfuns2875),M2.cdr(rfuns2875)),f2872);}return if_res1714;};return loop2871(f02869,fs02870,0,$rjs_core.Pair.Empty);});var compose2836 = $rjs_core.attachProcedureArity(function() {var fixed_lam1704 = {'1':cl1700,'2':cl1701,'0':cl1702}[arguments.length];if (fixed_lam1704!==undefined) {return fixed_lam1704.apply(null,arguments);} else {if (M2._gt__eq_(cl1703.length,1)) {var if_res1705 = cl1703.apply(null,arguments);} else {var if_res1705 = M2.error("case-lambda: invalid case");}return if_res1705;}},[0,M2.make_arity_at_least(1)]);var let_result1715 = M2.values(compose12806,compose2836);var compose1 = let_result1715.getAt(0);var compose = let_result1715.getAt(1);var __rjs_quoted__ = {};__rjs_quoted__.sort7 = sort7;__rjs_quoted__.sort9 = sort9;export { __rjs_quoted__,compose1,compose,build_list,build_string,build_vector,filter,assoc,assv,assq,findf,assf,memf,remove_times_,remq_times_,remv_times_,remove,remq,remv,foldr,foldl };