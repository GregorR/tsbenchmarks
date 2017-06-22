// equivalent to the consts.rkt file from the typed racket version

class GameConsts {
	static GRID_SIZE: number;
	static BOARD_HEIGHT: number;
	static BOARD_WIDTH: number;
	static BOARD_HEIGHT_PIXELS: number;
	static BOARD_WIDTH_PIXELS: number;
	static SEGMENT_RADIUS: number;
	static FOOD_RADIUS: number;
	static WORLD: World;

	constructor() {
		GameConsts.GRID_SIZE = 30;
		GameConsts.BOARD_HEIGHT = 20;
		GameConsts.BOARD_WIDTH = 30;
		GameConsts.BOARD_HEIGHT_PIXELS = GameConsts.GRID_SIZE * GameConsts.BOARD_HEIGHT;
		GameConsts.BOARD_WIDTH_PIXELS = GameConsts.GRID_SIZE * GameConsts.BOARD_WIDTH;
		GameConsts.SEGMENT_RADIUS = GameConsts.GRID_SIZE / 2.0;
		GameConsts.FOOD_RADIUS = GameConsts.SEGMENT_RADIUS;

		GameConsts.WORLD = new World( new Snake("right", [new Posn(5, 3)]), new Posn(8, 12));
	} 	
};
