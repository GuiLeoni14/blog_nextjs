import { AppProps } from 'next/app';
import { BlogThemeProvider } from '../context/BlogThemeContext';
import { Layout } from '../layout';
import GlobalStyle from '../styles/global';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <BlogThemeProvider>
            <GlobalStyle />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </BlogThemeProvider>
    );
}
