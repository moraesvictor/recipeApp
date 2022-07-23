import "styled-components";
import mainTheme from './themes/mainTheme';

type MainTheme = typeof mainTheme;
 
declare module 'styled-components' {
    export interface DefaultTheme extends MainTheme {}
}