// this is equivalent to date.rkt
// i'm fully aware that these should be member functions in the Date class,
// but in the interest of keeping this as close to the racket original as possible
// i figured i'd do it this way

import {CoreClasses as D} from './CoreClasses';
import {YMD as Y} from './YMD';

export module DateHelpers {
export function date_hash_proc( x: D.Date, fn: (n: number) => number): number {
	return fn( x.jdn);
}

// this is temporary, and probably needs to take an output channel
// to better match the racket and to actually make sense
// but it's unused in the tests so it's fine for now
export function date_write_proc( d: D.Date): void {
	console.log( "<date " + date_to_iso8601( d) + ">");
}

export function isDate( d: any): boolean {
	return (d instanceof D.Date);
}

export function date( y: number, m = D.Month.jan, d = 1): D.Date {
	var ymd = new D.YMD( y, m, d);
	return new D.Date( ymd, Y.ymd_to_jdn( ymd).ieEval());
}

export function date_to_ymd( d: D.Date): D.YMD {
	return d.ymd;
}

export function date_to_jdn( d: D.Date): number {
	return d.jdn;
}

export function ymd_to_date( ymd: D.YMD): D.Date {
	return date( ymd.y, ymd.m, ymd.d);
}

export function jdn_to_date( jdn: number): D.Date {
	return new D.Date( Y.jdn_to_ymd( new D.ExactRational( jdn, 1)), jdn);
}

export function date_to_iso_week( d: D.Date): number {
	return date_to_iso_week_wyear( d).x;
}

export function date_to_iso_wyear( d: D.Date): number {
	return date_to_iso_week_wyear( d).x;
}

export function date_to_iso_week_wyear( d: D.Date): D.Pair<number, number> {
	var ymd: D.YMD = date_to_ymd( d);
	var yday: number = Y.ymd_yday( ymd);
	var iso_yday: number = Y.jdn_to_iso_wday( date_to_jdn( d));
	var y: number = ymd.y;
	var w: number = Math.floor( (yday + (- iso_yday) + 10) / 7.0);

	if ( w == 0) {
		var y_1: number = y - 1;
		return new D.Pair<number, number>( Y.iso_weeks_in_year( y_1), y_1);
	} else if ( ( w == 53) && ( w > Y.iso_weeks_in_year( y))) {
		return new D.Pair<number, number>( 1, y);
	} else {
		return new D.Pair<number, number>( w, y);
	}
}

function f( n: number, len: number): string {
	var instr: string = n + "";
	var curLen: number = instr.length;

	for( var i: number = 0; i < (len - curLen); i ++) {
		instr = "0" + instr;
	}

	return instr;
}

export function date_to_iso8601( d: D.Date): string {
	var yd: number = d.ymd.y;
	var md: number = d.ymd.m;
	var dd: number = d.ymd.d;

	return (f( yd, 4) + "-" + f( md, 2) + "-" + f( dd, 2));
}
}
