// this is equivalent to date.rkt
// i'm fully aware that these should be member functions in the Date class,
// but in the interest of keeping this as close to the racket original as possible
// i figured i'd do it this way

import {CoreClasses as D} from './CoreClasses';
import {DateHelpers as DH} from './DateHelpers';
import {DateTimeHelpers as DTH} from './DateTimeHelpers';
import {HMSN as C} from './HMSN';
// import * as Y from './YMD';



export module TimeHelpers {
export function time_hash_proc( x: D.Time, fn: (n: number) => number): number {
	return fn( x.ns);
}

// this is temporary, and probably needs to take an output channel
// to better match the racket and to actually make sense
export function date_write_proc( d: D.Time): void {
	console.log( "<time " + time_to_iso8601( d) + ">");
}

export function time_to_hmsn( t: D.Time): D.HMSN {
	return t.hmsn;
}

export function time_to_ns( t: any): number {
	if( t instanceof D.Time) {
		return t.ns;
	} 

	return -1;
}

export function hmsn_to_time( hmsn: D.HMSN): D.Time {
	var c: C.Consts = new C.Consts();
	return new D.Time( hmsn, c.hmns_to_day_ns( hmsn));
}

export function day_ns_to_time( ns: number): D.Time {
	var c: C.Consts = new C.Consts();
	return new D.Time( c.day_ns_to_hmsn( ns), ns);
}

export function time( h: number, m = 0, s = 0, n = 0): D.Time {
	return hmsn_to_time( new D.HMSN( h, m, s, n));
}

function f( n: number, len: number): string {
	var instr: string = n + "";
	var curLen: number = instr.length;

	for( var i: number = 0; i < (len - curLen); i ++) {
		instr = "0" + instr;
	}

	return instr;
}

export function time_to_iso8601( t: D.Time): string {
	var h: number = t.hmsn.h;
	var m: number = t.hmsn.m;
	var s: number = t.hmsn.s;
	var n: number = t.hmsn.n;

	var c: C.Consts = new C.Consts();

	var fsec: number = s + (n / c.NS_SECOND);
	var pad: string = s >= 0? "" : "0";

	return ( f( h, 2) + ":" + f( m, 2) + ":" + pad + fsec);
}
}
