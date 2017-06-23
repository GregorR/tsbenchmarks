// equivalent to the data.rkt file from the typed racket version

export class Pair<A, B> {
	x: A;
	y: B;

	constructor(tx: A, ty: B) {
		this.x = tx;
		this.y = ty;
	}
};

//type Posn = Pair<number, number>;

// type NEListof<A> = Pair<A, A[]>;

export enum Dir {
	up = 1, down, left, right
};

export class Posn {
	x: number;
	y:number;

	constructor(tx: number, ty: number) {
		this.x = tx;
		this.y = ty;
	}

	public equals(p: Posn): boolean {
		return ((this.x == p.x) && (this.y == p.y));
	}
}

export class Snake {
	dir: Dir;
	segs: Pair<Posn, Posn[]>;

	constructor(d: Dir, s: Pair<Posn, Posn[]>) {
		this.dir = d;
		this.segs = new Pair<Posn, Posn[]>( new Posn(0, 0), []);
		
		this.segs.x = s.x;
		for (var i: number = 0; i < s.y.length; i++) {
			this.segs.y.push( s.y[ i]);
		}
	}
};

export class World {
	snake: Snake;
	food: Posn;

	constructor(s: Snake, f: Posn) {
		this.snake = s;
		this.food = f;
	}
}