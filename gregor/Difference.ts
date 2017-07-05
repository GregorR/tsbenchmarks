// this file is equivalent to difference.rkt

import * as D from './CoreClasses';
import * as DTH from './DateTimeHelpers';
import * as DH from './DateHelpers';
import * as C from './HMSN';

export function datetime_months_between( dt1: D.DateTime, dt2: D.DateTime): number {
	if( dt2.lt( dt1)) {
		return (-1)*datetime_months_between( dt2, dt1);
	}

	var d1: D.Date = dt1.date;
	var d2: D.Date = dt2.date;

	var ymd1: D.YMD = DH.date_to_ymd( d1);
	var ymd2: D.YMD = DH.date_to_ymd( d2);

	var y1: number = ymd1.y;
	var y2: number = ymd2.y;
	var m1: number = ymd1.m;
	var m2: number = ymd1.m;
	var dd1: number = ymd1.d;
	var dd2: number = ymd2.d;

	var diff: number = ( y2 - y1) * 12 + ( m2 - m1);

	var start_dom: number = ((dd1 > dd2) && ( days_in_month( y2, m2) == dd2))? dd2: dd1;

	var dt1a: D.DateTime = DTH.date_and_time_to_dateTime( DH.date( y1, m2, start_dom), DTH.dateTime_to_time( dt1));

	var ts1: D.ExactRational = DTH.dateTime_to_jd( dt1a).add( ( new D.ExactRational( -1, 1)).mul(DTH.dateTime_to_jd( DTH.datetime( y1, m1))));
	var ts2: D.ExactRational = DTH.dateTime_to_jd( dt2).add( ( new D.ExactRational( -1, 1)).mul(DTH.dateTime_to_jd( DTH.datetime( y2, m2))));

	if( ts2 < ts1) {
		diff -= 1;
	}

	return diff;
}

export function dateTime_days_between( dt1: D.DateTime, dt2: D.DateTime): number {
	return Math.floor( DTH.dateTime_to_jd( dt2).ieEval() - DTH.dateTime_to_jd( dt1).ieEval());
}

export function dateTime_nanoseconds_between( dt1: D.DateTime, dt2: D.DateTime): number {
	return (dateTime_to_jdns( dt2) - dateTime_to_jdns( dt1));
}

export function dateTime_to_jdns( dt: D.DateTime): number {
	var c: C.Consts = new C.Consts();
	return Math.floor( DTH.dateTime_to_jd( dt).ieEval() * c.NS_DAY);
}

export function days_in_month( y: number, m: number): number {
	// months with 31 days: jan=1, mar=3, may=5, jul=7, aug=8, oct=10, dec=12
	// months with 30 days: apr=4, jun=6, sep=9, nov=11
	// feb=2 depends on the year

	// if (year is not divisible by 4) then (it is a common year)
	// else if (year is not divisible by 100) then (it is a leap year)
	// else if (year is not divisible by 400) then (it is a common year)
	// else (it is a leap year)

	if( m < 1 || m > 12) {
		return -1; // error
	}

	if( m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
		return 31;
	} else if( m == 4 || m == 6 || m == 9 || m == 11) {
		return 30;
	} else if( m == 2 && y % 4 != 0) {
		return 28;
	} else if( m == 2 && y % 100 != 0) {
		return 29;
	} else if( m == 2 && y % 400 != 0) {
		return 28;
	} else {
		return 29;
	}
}