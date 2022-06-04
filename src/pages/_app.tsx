import { AppProps } from 'next/app';
import { BlogThemeProvider } from '../context/BlogThemeContext';
import { PaginationProvider } from '../context/PaginationContext';
import GlobalStyle from '../styles/global';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <BlogThemeProvider>
            <PaginationProvider>
                <GlobalStyle />
                <Component {...pageProps} />
            </PaginationProvider>
        </BlogThemeProvider>
    );
}
