import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            second: string;
            background: string;
            gray: string;
            white: string;
            title: string;
        };
        font: {
            family: {
                default: string;
            };
            sizes: {
                xsmall: string;
                small: string;
                medium: string;
                large: string;
                xlarge: string;
                xxlarge: string;
                huge: string;
                xhuge: string;
            };
        };
    }
}
