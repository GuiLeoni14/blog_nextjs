import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Layout } from '../layout';
import GlobalStyle from '../styles/global';
import light from '../styles/theme/light';

export default function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState(light);
    useEffect(() => {
        setTheme(light);
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}
