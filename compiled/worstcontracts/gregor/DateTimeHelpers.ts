// this is equivalent to datetime.rkt
// i'm fully aware that these should be member functions in the DateTime class,
// but in the interest of keeping this as close to the racket original as possible
// i figured i'd do it this way
import { CoreClasses as D } from './CoreClasses';
import { DateHelpers as DH } from './DateHelpers';
import { HMSN as C } from './HMSN';
import { YMD as Y } from './YMD';
import { TimeHelpers as T } from './TimeHelpers';
export module DateTimeHelpers {
        export function datetime_equal_proc(d1: D.DateTime, d2: D.DateTime): any {
            return ((d1.jd.num == d2.jd.num) && (d1.jd.denom == d2.jd.denom)); // this assumes all the fractions are fully reduced (this happens in ExactRational constructor)
        }
        export function datetime_hash_proc(x: D.DateTime, fn: (n: D.ExactRational) => number): any {
            return fn(x.jd);
        }
        // this is temporary, and probably needs to take an output channel
        // to better match the racket and to actually make sense
        export function datetime_write_proc(d: D.DateTime): void {
            console.log("<datetime " + datetime_to_iso8601(d) + ">");
        }
        export function isDateTime(d: any): boolean {
            return (d instanceof D.DateTime);
        }
        export function dateTime_to_date(d: D.DateTime): D.Date {
            return d.date;
        }
        export function dateTime_to_time(d: D.DateTime): D.Time {
            return d.time;
        }
        export function dateTime_to_jd(d: any): D.ExactRational {
            if (isDateTime(d)) {
                return (<D.DateTime>d).jd;
            }
            else
                return new D.ExactRational(-1, 1); // this means error (date should never be negative)
        }
        export function dateTime_to_posix(d: any): D.ExactRational {
            return jd_to_posix(d.jd);
        }
        export function jd_to_datetime(jd: any): D.DateTime {
            var ejd: number = round(jd.ieEval());
            var p: D.Pair<D.Date, D.Time> = jd_to_date_and_time(new D.ExactRational(ejd, 1));
            return date_and_time_to_dateTime(p.x, p.y);
        }
        export function posix_to_dateTime(p: D.ExactRational): D.DateTime {
            return jd_to_datetime(posix_to_jd(new D.ExactRational(round(p.ieEval()), 1)));
        }
        export function date_and_time_to_dateTime(d: D.Date, t: D.Time): D.DateTime {
            return new D.DateTime(d, t, date_and_time_to_jd(d, t));
        }
        export function jd_to_dateTime(jd: number): D.DateTime {
            var ejd: number = round(jd);
            var d_t: D.Pair<D.Date, D.Time> = jd_to_date_and_time(new D.ExactRational(ejd, 1));
            return date_and_time_to_dateTime(d_t.x, d_t.y);
        }
        export function datetime(year: number, month: any = D.Month.jan, day = 1, hour: any = 0, minute: any = 0, second = 0, nano = 0): D.DateTime {
            var date: D.Date = DH.date(year, month, day);
            var time: D.Time = new D.Time(new D.HMSN(hour, minute, second, nano), nano);
            return date_and_time_to_dateTime(date, time);
        }
        export function datetime_to_iso8601(d: D.DateTime): string {
            var di: string = DH.date_to_iso8601(dateTime_to_date(d));
            var ti: string = T.time_to_iso8601(dateTime_to_time(d));
            return (di + "T" + ti);
        }
        export function date_and_time_to_jd(d: D.Date, t: D.Time): D.ExactRational {
            var jdn: D.ExactRational = new D.ExactRational(d.jdn, 1);
            var consts: C.Consts = new C.Consts();
            var day_ns: D.ExactRational = new D.ExactRational(consts.hmns_to_day_ns(t.hmsn), 1);
            var toRet = (jdn.add(new D.ExactRational(-1, 2))).add(day_ns.divide(new D.ExactRational(consts.NS_DAY, 1)));
            return toRet;
        }
        export function jd_to_date_and_time(jd: D.ExactRational): D.Pair<D.Date, D.Time> {
            var jdn: number = jd_to_jdn(jd).ieEval();
            var d: D.Date = DH.jdn_to_date(jdn);
            var day_ns: number = jd_to_day_ns(jd);
            var t: D.Time = T.day_ns_to_time(day_ns);
            return new D.Pair<D.Date, D.Time>(d, t);
        }
        export function jd_to_jdn(jd: D.ExactRational): D.ExactRational {
            var lo: number = Math.floor(jd.ieEval());
            if ((jd.ieEval() - lo) >= 0.5) {
                lo++;
            }
            return new D.ExactRational(lo, 1);
        }
        export function round(n: number): number {
            var s: number = n < 0 ? -1 : 1;
            var f: number = Math.floor(Math.abs(n));
            var diff: number = Math.abs(n) - f;
            if (diff >= 0.5)
                f++;
            return f * s;
        }
        export function jd_to_day_ns(jd: any): any {
            var base: any = jd.add(new D.ExactRational(-1, 2));
            var frac: D.ExactRational = base.add(new D.ExactRational(Math.floor(base.ieEval()), 1));
            var r: number = round(frac.ieEval() * (new C.Consts()).NS_DAY);
            return r;
        }
        export function jd_to_posix(jd: D.ExactRational): D.ExactRational {
            return (jd.add((new D.ExactRational(-2440587, 1)).add(new D.ExactRational(-1, 2)))).mul(new D.ExactRational(86400, 1));
        }
        export function posix_to_jd(posix: D.ExactRational): D.ExactRational {
            return (posix.divide(new D.ExactRational(86400, 1))).add((new D.ExactRational(2440587, 1)).add(new D.ExactRational(1, 2)));
        }
        export function dateTime_add_nanoseconds(dt: D.DateTime, n: number): D.DateTime {
            return jd_to_dateTime(((dateTime_to_jd(dt)).add((new D.ExactRational(n, 1)).divide(new D.ExactRational((new C.Consts()).NS_DAY, 1)))).ieEval());
        }
        export function dateTime_add_seconds(dt: D.DateTime, n: number): D.DateTime {
            return dateTime_add_nanoseconds(dt, (new C.Consts()).NS_DAY * n);
        }
    }
