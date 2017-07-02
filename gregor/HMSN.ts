import * as D from './CoreClasses'
import * as C from './HMSN';

export class Consts {

	NS_SECOND: number = 1000000000;
	NS_MILLI: number = 1000000;
	NS_MICRO: number = 1000;

	NS_MINUTE: number;
	NS_HOUR: number;
	NS_DAY: number;
	MILLI_DAY: number;
	DAYS_NS: D.ExactRational;

	constructor() {
		this.NS_MINUTE = this.NS_SECOND * 60;
		this.NS_HOUR = this.NS_MINUTE * 60;
		this.NS_DAY = this.NS_SECOND * 86400;
		this.MILLI_DAY = this.NS_DAY / this.NS_MILLI;
		this.DAYS_NS = new D.ExactRational( 1, this.NS_DAY); 
	}

	public day_ns_c( hmsn: D.HMSN): number {
		var h: number = hmsn.h;
		var m: number = hmsn.m;
		var s: number = hmsn.s;
		var n: number = hmsn.n;

		var c: C.Consts = new C.Consts();

		return ( c.NS_HOUR * h + c.NS_MINUTE * m + c.NS_SECOND * s + n);
	} 

	public day_ns_to_hmsn( ns: number): D.HMSN {
		var c: C.Consts = new C.Consts();

		var h: number = Math.floor( ns / c.NS_HOUR);
		ns -= h * c.NS_HOUR;
		var m: number = Math.floor( ns / c.NS_MINUTE);
		ns -= m * c.NS_MINUTE;
		var s: number = Math.floor( ns / c.NS_SECOND);
		ns -= s * c.NS_MINUTE;

		return new D.HMSN( h, m, s, ns);
	}
		
};
