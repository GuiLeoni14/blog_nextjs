import { AppProps } from 'next/app';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Layout } from '../layout';
import { MainContainer } from '../styles/container';
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
