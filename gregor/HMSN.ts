import * as D from './CoreClasses'

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
		
};

// ;; (define day-ns/c (integer-in 0 (sub1 NS/DAY)))
// ;; Codomain of hmsn->day-ns should be a day-ns/c
// (: hmsn->day-ns (-> HMSN Natural))
// (define (hmsn->day-ns hmsn)
//   (match-define (HMSN h m s n) hmsn)
//   (define r (+ (* NS/HOUR h)
//                (* NS/MINUTE m)
//                (* NS/SECOND s)
//                n))
//   (unless (index? r)
//     (error "nope"))
//   r)

// (: day-ns->hmsn (-> Natural HMSN))
// (define (day-ns->hmsn ns)
//   (let* ([h (quotient ns NS/HOUR)]
//          [ns (- ns (* h NS/HOUR))]
//          [m (quotient ns NS/MINUTE)]
//          [ns (- ns (* m NS/MINUTE))]
//          [s (quotient ns NS/SECOND)]
//          [ns (- ns (* s NS/SECOND))])
//     (HMSN h m s ns)))