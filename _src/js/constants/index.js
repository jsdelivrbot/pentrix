export const COLS = 20;
export const ROWS = 20;

export const BLOCK_SIZE = 20;
export const NUMBER_OF_BLOCK = 5;

export const HIDDEN_ROWS = NUMBER_OF_BLOCK;
export const LOGICAL_ROWS = ROWS + HIDDEN_ROWS;

export const WIDTH = BLOCK_SIZE * COLS;
export const HEIGHT = BLOCK_SIZE * ROWS;
export const NEXT_WIDTH = BLOCK_SIZE * NUMBER_OF_BLOCK;
export const NEXT_HEIGHT = BLOCK_SIZE * NUMBER_OF_BLOCK;

export const RENDER_INTERVAL = 30;
export const DEFAULT_TICK_INTERVAL = 500;
export const SPEEDUP_RATE = 10;

export const START_X = Math.floor((COLS - NUMBER_OF_BLOCK) / 2);
export const START_Y = 0;

export const CLEARLINE_BLOCK_INDEX = 14;
export const GAMEOVER_BLOCK_INDEX = 15;

export const BG_COLOR = '#888';
export const DEFAULT_DROP_DIRECTION = 'down';
export const COLOR_LIST = [
  '#FF6666',
  '#FFCC66',
  '#FFFF66',
  '#CCFF66',
  '#66FF66',
  '#66FFCC',
  '#66FFFF',
  '#66CCFF',
  '#6666FF',
  '#CC66FF',
  '#FF66FF',
  '#FF6FCF',
  '#FF00FF',
  '#FF8000',
  '#4C4C4C',
];

export const KEYS = {
  37: 'left',  // ←
  39: 'right',  // →
  40: 'down',  // ↓
  38: 'rotate',  // ↑
  32: 'rotate'  // space
};

export const CLEARLINE_BLOCK = {
  id: 9,
  color: '#aaa',
};

export const GAMEOVER_BLOCK = {
  id: 10,
  color: '#777',
};

export const BLOCK_LIST = [
  {
    id: 0,
    color: '#FF6666',
    shape: [
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
    ],
  },
  {
    id: 1,
    color: '#FFCC66',
    shape: [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
    ],
  },
  {
    id: 2,
    color: '#FFFF66',
    shape: [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
    ],
  },
  {
    id: 3,
    color: '#CCFF66',
    shape: [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
    ],
  },
  {
    id: 4,
    color: '#66FF66',
    shape: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0],
    ],
  },
  {
    id: 5,
    color: '#66FFCC',
    shape: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
    ],
  },
  {
    id: 6,
    color: '#66FFFF',
    shape: [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
  },
  {
    id: 7,
    color: '#66CCFF',
    shape: [
    ],
  },
];
