const calcRem = (size) => `${size / 16}rem`;

/*
    Font Size
 */
const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  titleSize: calcRem(50),
};

/*
    Card Size
*/
const width = {
  mobile: calcRem(300),
  pc: calcRem(500),
};

const height = {
  mobile: calcRem(400),
  pc: calcRem(600),
};

const radius = {
  mobile: calcRem(16),
  pc: calcRem(24),
};

const paddings = {
  mobile: `${calcRem(16)} ${calcRem(16)}`,
  pc: `${calcRem(24)} ${calcRem(12)}`,
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const margins = {
  mobile: calcRem(16),
  pc: calcRem(24),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const interval = {
  base: calcRem(50),
  lg: calcRem(100),
  xl: calcRem(150),
  xxl: calcRem(200),
};

const verticalInterval = {
  base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

const colors = {
  black: '#000000',
  dark: '#1A1E2C',
  white: '#FFFFFF',
  gray: '#8E94A7',
  lightgray: '#E7E9F0',
  stroke: '#EBEBF9',
  blue: '#0346F2',
  shadow: '8px 8px 16px 4px rgba(133, 139, 146, 0.06)',
};

const theme = {
  fontSizes,
  colors,
  paddings,
  margins,
  interval,
  radius,
  verticalInterval,
  width,
  height,
};

export default theme;
