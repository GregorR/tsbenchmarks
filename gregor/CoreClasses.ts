// equivalent to the core_structs.rkt file from the racket version
// and also the gregor_structs.rkt
// and also the moment_base.rkt

import {DateTimeHelpers as DTH} from './DateTimeHelpers';
// import * as MH from './MomentHelpers';

export module CoreClasses {
export class Pair<A, B> {
	x: A;
	y: B;

	constructor(tx: A, ty: B) {
		this.x = tx;
		this.y = ty;
	}
};

export class ExactRational {
	num: number;
	denom: number;

	constructor( n: number, d: number) {
		// reduce the fraction -- first make them into integers (they should already be, but just to check)
		n = Math.floor( n);
		d = Math.floor( d); 

		// console.log( "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  // 		console.log( n);
  // 		console.log( d);
  // 		console.log( "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");

		// make sure the fraction is in lowest terms
  		var gcdd: number = this.gcd( n, d);

  		this.num = n/gcdd;
  		this.denom = d/gcdd;
	}

	public reduce(): void {
		var gcdd: number = this.gcd( this.num, this.denom);
		this.num = this.num/gcdd;
  		this.denom = this.denom/gcdd;
	}

	public gcd( a: number, b: number): number {
		return b ? this.gcd(b, a % b) : a;
	}

	public ieEval(): number {
		return this.num/(this.denom + 0.0);
	}

	public add( e: ExactRational): ExactRational {
		var gcmDenoms: number = this.denom * e.denom;
		var tNum: number = this.num * e.denom + e.num * this.denom;

		return new ExactRational( tNum, gcmDenoms);;
	}

	public divide( e: ExactRational): ExactRational { 
		// a/b / c/d = ad / bc
		var newNum = this.num * e.denom;
		var newDenom = this.denom * e.num;

		return new ExactRational( newNum, newDenom);
	}

	public mul( e: ExactRational): ExactRational {
		return new ExactRational( this.num * e.num, this.denom * e.denom);
	}

	public equals( e: ExactRational): boolean {
		return (this.num == e.num && this.denom == e.denom);
	}

	public lt( e: ExactRational): boolean {
		return ( this.ieEval() < e.ieEval());
	}

	public lte( e: ExactRational): boolean {
		return (this.equals( e) || this.lt( e));
	}
};

export enum Month {
	jan = 1, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec
};

export class YMD {
	y: number;
	m: Month;
	d: number;

	constructor(ty: number, tm: Month, td: number) {
		this.y = ty;
		this.m = tm;
		this.d = td;
	}
};

export class HMSN {
	h: number;
	m: number;
	s: number;
	n: number;

	constructor( ht: number, mt: number, st: number, nt: number) {
		this.h = ht;
		this.m = mt;
		this.s = st;
		this.n = nt;
	}
};

export class Date {
	ymd: YMD;
	jdn: number;

	constructor( tymd: YMD, tdjn: number) {
		this.ymd = new YMD( tymd.y, tymd.m, tymd.d);
		this.jdn = tdjn;
	}

	public equals(d: Date): boolean {
		return ( this.jdn == d.jdn);
	}

	public lte( d: Date): boolean {
		return ( this.jdn <= d.jdn);
	}
};

export class Time {
	hmsn: HMSN;
	ns: number;

	constructor( h: HMSN, n: number) {
		this.ns = n;
		this.hmsn = h;
	}

	public equals( t: Time) {
		return ( this.ns == t.ns);
	}

	public lte( t: Time) {
		return ( this.ns <= t.ns);
	}

	public lt( t: Time) {
		return ( this.ns < t.ns);
	}
};

export class DateTime {
	date: Date;
	time: Time;
	jd: ExactRational;

	constructor( d: Date, t: Time, j: ExactRational) {
		this.date = new Date( d.ymd, d.jdn);
		this.time = new Time( t.hmsn, t.ns);
		this.jd = new ExactRational( j.num, j.denom);
	}

	public equals( d: DateTime): boolean {
		return ( this.jd.num == d.jd.num && this.jd.denom == d.jd.denom);
	}

	public lt( d: DateTime): boolean {
		return ( this.jd.ieEval() < d.jd.ieEval());
	}

	public lte( d: DateTime): boolean {
		return ( this.equals( d) || this.lt( d));
	}
};

export class Moment {
	dateTimeLocal: DateTime;
	UTCOffset: number;
	zone: string; // in racket it's union of string and false; here, if the string is empty this will be considered false

	constructor( dt: DateTime, off: number, z: string) {
		this.dateTimeLocal = new DateTime( dt.date, dt.time, dt.jd);
		this.UTCOffset = off;
		this.zone = z;
	}

	public moment_to_iso8601_tzid( m: Moment): string {
		var iso: string = this.moment_to_iso8601( m);
		if( m.zone != "") {
			iso += "[" + m.zone + "]";
		}
		return iso;
	}

	public moment_to_iso8601( m: Moment): string {
		if( m.UTCOffset == 0) {
			return DTH.datetime_to_iso8601( m.dateTimeLocal) + "Z";
		}

		var sign: string = m.UTCOffset < 0? "-" : "+";
		var sec: number = Math.abs( m.UTCOffset);
		var hrs: number = Math.floor( sec / 3600);
		var min: number = Math.floor( (sec - ( hrs * 3600)) / 60);

		return DTH.datetime_to_iso8601( m.dateTimeLocal) + sign + this.f( hrs, 2) + ":" + this.f( min, 2);
	}

	private f( n: number, len: number): string {
		var instr: string = n + "";
		var curLen: number = instr.length;

		for( var i: number = 0; i < (len - curLen); i ++) {
			instr = "0" + instr;
		}

		return instr;
	}

	// public equals( m: Moment): boolean {
	// 	return MH.moment_to_jd(this).equals( MH.moment_to_jd( m));
	// }

	// public lt( m: Moment): boolean {
	// 	return MH.moment_to_jd(this).lt( MH.moment_to_jd( m));
	// }

	// public lte( m: Moment): boolean {
	// 	return MH.moment_to_jd(this).lte( MH.moment_to_jd( m));
	// }
};
}
