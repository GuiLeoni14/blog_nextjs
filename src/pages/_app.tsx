import { AppProps } from 'next/app';
import { BlogThemeProvider } from '../context/BlogThemeContext';
import GlobalStyle from '../styles/global';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <BlogThemeProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </BlogThemeProvider>
    );
}
