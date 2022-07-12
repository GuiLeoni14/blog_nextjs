import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            second: string;
            gray_1: string;
            gray_2: string;
            gray_3: string;
            gray_4: string;
            gray_5: string;
            gray_6: string;
            background: string;
            gray: string;
            white: string;
            text: string;
            darkText: string;
            secondary: string;
            mediumGray: string;
            darkerGray: string;
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
        spacings: {
            xsmall: string;
            small: string;
            medium: string;
            large: string;
            xlarge: string;
            xxlarge: string;
            huge: string;
            xhuge: string;
        };
        media: {
            lteLarge: string;
            lteMedium: string;
            lteSmall: string;
        };
        sizes: {
            max: string;
            content: string;
        };
    }
}
