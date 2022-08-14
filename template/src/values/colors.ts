const COLORS = {
  initialBackGround: '#000111',
  black: '#000',
  white: '#fff',
  orange: '#FF7301',
  pink: '#FFE3CC',
  errorRed: '#F23005',
  green: '#0DD98B',
  primary: '#13a7d5',
  alfaBlack: 'rgba(0, 0, 0, 0.8)',
  lightGrey: '#DDDDDD',
};

export default COLORS;

export type TThemeColor = keyof typeof COLORS;
