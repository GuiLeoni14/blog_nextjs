import 'styled-components';
import light from '../styles/theme/light';

type ThemeType = typeof light;

declare module 'styled-components' {
  //eslint-disable-next-line
  export interface DefaultTheme extends ThemeType {}
}
