"use strict";
// this is equivalent to date.rkt
// i'm fully aware that these should be member functions in the Date class,
// but in the interest of keeping this as close to the racket original as possible
// i figured i'd do it this way
exports.__esModule = true;
// import * as D from './CoreClasses';
// import * as DH from './DateHelpers';
// import * as DTH from './DateTimeHelpers';
// import * as C from './HMSN';
// export var current_timezone: string = "America/Toronto Eastern";
// // leaving out offset resolver potential OHNO
// export function moment( year: number, month = D.Month.jan, day = 1, hour = 0, minute = 0, second = 0, nano = 0, tz = current_timezone): D.Moment {
// 	return datetime_tz_to_moment( DTH.datetime( year, month, day, hour, minute, second, nano), tz);
// }
// export function datetime_tz_to_moment( dt: D.DateTime, zone: string): D.Moment {
// 	if( zone != "") {
// 	}
// }
// ;(: datetime+tz->moment (-> DateTime
// ;                           (U Integer String)
// ;                           (-> (U tzgap tzoverlap)
// ;                               DateTime
// ;                               (U String #f)
// ;                               (U Moment #f) Moment)
// ;                           Moment))
// (define (datetime+tz->moment dt zone resolve)
//   (cond [(string? zone)
//          (define res (local-seconds->tzoffset zone (exact-round (datetime->posix dt))))
//          (cond
//           [(tzoffset? res)
//            (make-moment dt (tzoffset-utc-seconds res) zone)]
//           [else (resolve res dt zone #f)])]
//         [else
//          (make-moment dt zone #f)]))
// (define moment->datetime/local Moment-datetime/local)
// (define moment->utc-offset     Moment-utc-offset)
// (define moment->tzid           Moment-zone)
// ;(: moment->timezone (-> Moment tz))
// (define (moment->timezone m)
//   (or (moment->tzid m)
//       (moment->utc-offset m)))
// ;(: moment-in-utc (-> Moment Moment))
// (define (moment-in-utc m)
//   (if (equal? UTC (moment->timezone m))
//       m
//       (timezone-adjust m UTC)))
// ;(: moment->jd (-> Any Exact-Rational))
// (define (moment->jd m)
//   (unless (Moment? m) (error "moment->jd type error"))
//   (datetime->jd
//    (moment->datetime/local
//     (moment-in-utc m))))
// ;(: moment->posix (-> Moment Exact-Rational))
// (define (moment->posix m)
//   (datetime->posix
//    (moment->datetime/local
//     (moment-in-utc m))))
// ;(: posix->moment (-> Exact-Rational tz Moment))
// (define (posix->moment p z)
//   ;(: off Integer)
//   (define off
//     (cond [(string? z) (tzoffset-utc-seconds (utc-seconds->tzoffset z p))]
//           [else        0]))
//   (define dt (posix->datetime (+ p off)))
//   (unless (string? z) (error "posix->moment: can't call make-moment with an integer"))
//   (make-moment dt off z))
// ;(: moment-add-nanoseconds (-> Moment Natural Moment))
// (define (moment-add-nanoseconds m n)
//   (posix->moment (+ (moment->posix m) (* n (/ 1 NS/SECOND)))
//                  (moment->timezone m)))
// ;(: timezone-adjust (-> Moment (U Natural String) Moment))
// (define (timezone-adjust m z)
//   (match-define (Moment dt neg-sec _) m)
//   ;(: dt/utc DateTime)
//   (define dt/utc
//     (datetime-add-seconds dt (- neg-sec)))
//   (cond [(string? z)
//          (define posix (datetime->posix dt/utc))
//          (match-define (tzoffset offset _ _) (utc-seconds->tzoffset z posix))
//          (define local (datetime-add-seconds dt/utc offset))
//          (make-moment local offset z)]
//         [else
//          (define local (datetime-add-seconds dt/utc z))
//          (make-moment local z #f)]))
// ;(: timezone-coerce (->* [Moment (U Natural String)]
// ;                        (#:resolve-offset (-> (U tzgap tzoverlap) DateTime (U String #f) (U #f Moment) Moment))
// ;                        Moment))
// (define (timezone-coerce m z #:resolve-offset [resolve resolve-offset/raise])
//   (datetime+tz->moment (moment->datetime/local m) z resolve))
function moment_to_jd(m) {
    if (m instanceof D.Moment) {
        return DTH.dateTime_to_jd(moment_to_datetime_local(moment_in_utc(m)));
    }
    return new D.ExactRational(-1, 1); // this should only execute if it's an error; negative time means error
}
exports.moment_to_jd = moment_to_jd;
exports.UTC = "Etc/UTC";
