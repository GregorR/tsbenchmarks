import * as $rjs_core from '../../../runtime/core.js';import * as M0 from "../../../runtime/kernel.rkt.js";if (M0.eq_p(M0.system_type(),$rjs_core.Symbol.make("windows"))) {var if_res3509 = ";";} else {var if_res3509 = ":";}var sep5545 = if_res3509;var r5543 = M0.byte_regexp(M0.string__gt_bytes_by_utf_8(M0.format("([^~a]*)~a(.*)",sep5545,sep5545)));var cons_path5544 = function(default5546, s5547, l5548) {if (M0.eq_p(M0.system_type(),$rjs_core.Symbol.make("windows"))) {var if_res3510 = M0.__rjs_quoted__.regexp_replace_times_("/\"/",s5547,new Uint8Array([]));} else {var if_res3510 = s5547;}var s5549 = if_res3510;if (M0.__rjs_quoted__.bytes_eq__p(s5549,new Uint8Array([]))) {var if_res3511 = M0.append(default5546,l5548);} else {var if_res3511 = M0.cons(M0.__rjs_quoted__.bytes__gt_path(s5549),l5548);}return if_res3511;};var path_list_string__gt_path_list = function(s5550, default5551) {var or_part5552 = M0.bytes_p(s5550);if (or_part5552) {var if_res3512 = or_part5552;} else {var if_res3512 = M0.string_p(s5550);}if (if_res3512) {var if_res3513 = M0.rvoid();} else {var if_res3513 = M0.raise_argument_error($rjs_core.Symbol.make("path-list-string->path-list"),"(or/c bytes? string?)",s5550);}if_res3513;if (M0.list_p(default5551)) {var if_res3514 = M0.andmap(M0.__rjs_quoted__.path_p,default5551);} else {var if_res3514 = false;}if (if_res3514) {var if_res3515 = M0.rvoid();} else {var if_res3515 = M0.raise_argument_error($rjs_core.Symbol.make("path-list-string->path-list"),"(listof path?)",default5551);}if_res3515;var loop5553 = function(s5554) {var m5555 = M0.regexp_match(r5543,s5554);if (m5555) {var if_res3517 = cons_path5544(default5551,M0.cadr(m5555),loop5553(M0.caddr(m5555)));} else {var if_res3517 = cons_path5544(default5551,s5554,M0.rnull);}return if_res3517;};if (M0.string_p(s5550)) {var if_res3516 = M0.string__gt_bytes_by_utf_8(s5550);} else {var if_res3516 = s5550;}return loop5553(if_res3516);};var __rjs_quoted__ = {};export { __rjs_quoted__,path_list_string__gt_path_list };