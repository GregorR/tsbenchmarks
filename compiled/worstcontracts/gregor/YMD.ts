// helper functions for the YMD class mostly
// all names match to the racket originals
// this corresponds to ymd.rkt
import { CoreClasses as D } from './CoreClasses';
import { DateTimeHelpers as DTH } from './DateTimeHelpers';
import { DateHelpers as DH } from './DateHelpers';
import { HMSN as C } from './HMSN';
export module YMD {
        export const DAYS_PER_MONTH: any = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        export const CUMULATIVE_MONTH_DAYS: number[] = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        export const CUMULATIVE_MONTH_DAYS_LEAP: number[] = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
        export function ex_truncate(t: number): any {
            return (t < 0 ? -1 : 1) * Math.floor(Math.abs(t));
        }
        export function mod1(x: number, y: number): number {
            return y - ((y - x) % y);
        }
        export function ymd_to_jdn(ymd: D.YMD): D.ExactRational {
            var y: number = ymd.y;
            var m: number = ymd.m;
            var d: number = ymd.d;
            if (m < 3) {
                y -= 1;
                m += 12;
            }
            var t1: number = ex_truncate(((m * 153) - 457) / 5.0);
            return new D.ExactRational(d + t1 + y * 365 + Math.floor(y / 4) + (-1) * Math.floor(y / 100) + Math.floor(y / 400) + 1721119, 1);
        }
        export function jdn_to_ymd(jdn: D.ExactRational): D.YMD {
            var x: any = Math.floor((jdn.ieEval() - 1867216.25) / 36524.25);
            var a: number = jdn.ieEval() + 1 + x + (-1) * Math.floor(x / 4);
            var b: any = a + 1524;
            var c: number = Math.floor((b - 122.1) / 365.25);
            var d: number = Math.floor(c * 365.25);
            var e: number = Math.floor((b - d) / 30.6001);
            var dom: number = (b - d) - Math.floor(e * 30.6001);
            var m, y: number;
            if (e <= 13) {
                m = e - 1;
                y = c - 4716;
            }
            else {
                m = e - 13;
                y = c - 4715;
            }
            return new D.YMD(y, m, dom);
        }
        export function jdn_wday(jdn: number): number {
            return ((jdn + 1) % 7);
        }
        export function jdn_to_iso_wday(jdn: number): number {
            return mod1(jdn_wday(jdn), 7);
        }
        export function ymd_yday(ymd: D.YMD): number {
            var y: number = ymd.y;
            var m: number = ymd.m;
            var d: any = ymd.d;
            if (is_leap_year(y)) {
                return d + CUMULATIVE_MONTH_DAYS_LEAP[m - 1];
            }
            else {
                return d + CUMULATIVE_MONTH_DAYS[m - 1];
            }
        }
        export function ymd_to_quarter(ymd: any): number {
            return Math.floor((ymd.m - 1) / 3.0) + 1;
        }
        export function ymd_add_years(ymd: D.YMD, n: number): any {
            var y: number = ymd.y;
            var m: number = ymd.m;
            var d: number = ymd.d;
            var ny: number = y + n;
            var max_dom: number = days_in_month(ny, m);
            return new D.YMD(ny, m, ((d <= max_dom ? d : max_dom)));
        }
        export function ymd_add_months(ymd: D.YMD, n: number): D.YMD {
            var y: number = ymd.y;
            var m: number = ymd.m;
            var d: number = ymd.d;
            var ny: number = y + Math.floor((n + m - 1) / 12);
            var v: number = mod1((m + n), 12);
            var nm: number = v < 0 ? v + 12 : v;
            var max_dom: number = days_in_month(ny, nm);
            var nd: number = d <= max_dom ? d : max_dom;
            return new D.YMD(ny, nm, nd);
        }
        export function is_leap_year(y: number): boolean {
            // if (year is not divisible by 4) then (it is a common year)
            // else if (year is not divisible by 100) then (it is a leap year)
            // else if (year is not divisible by 400) then (it is a common year)
            // else (it is a leap year)
            if (y % 4 != 0) {
                false;
            }
            else if (y % 100 != 0) {
                true;
            }
            else if (y % 400 != 0) {
                false;
            }
            else {
                return true;
            }
        }
        export function days_in_month(y: number, m: number): number {
            // months with 31 days: jan=1, mar=3, may=5, jul=7, aug=8, oct=10, dec=12
            // months with 30 days: apr=4, jun=6, sep=9, nov=11
            // feb=2 depends on the year
            if (m < 1 || m > 12) {
                return -1; // error
            }
            if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
                return 31;
            }
            else if (m == 4 || m == 6 || m == 9 || m == 11) {
                return 30;
            }
            else if (m == 2 && is_leap_year(y)) {
                return 29;
            }
            else {
                return 29;
            }
        }
        export function iso_weeks_in_year(y: number): number {
            var w: number = jdn_wday(Math.floor(ymd_to_jdn(new D.YMD(y, 1, 1)).ieEval()));
            if (w == 4 || (is_leap_year(y) && w == 3)) {
                return 53;
            }
            else {
                return 52;
            }
        }
    }
