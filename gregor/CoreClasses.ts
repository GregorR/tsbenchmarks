// equivalent to the core_structs.rkt file from the racket version
// and also the gregor_structs.rkt

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
};

export class Date {
	ymd: YMD;
	jdn: number;

	constructor( tymd: YMD, tdjn: number) {
		this.ymd = new YMD( tymd.y, tymd.m, tymd.d);
		this.jdn = tdjn;
	}
};

export class Time {
	hmsn: HMSN;
	ns: number;
};

export class DateTime {
	date: Date;
	time: Time;
	jd: ExactRational;
};

export class Moment {
	dateTimeLocal: DateTime;
	UTCOffset: number;
	zone: string; // in racket it's union of string and false; here, if the string is empty this will be considered false
};