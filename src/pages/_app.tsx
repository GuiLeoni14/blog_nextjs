import { AppProps } from 'next/app';
import { BlogThemeProvider } from '../context/BlogThemeContext';
import { PaginationProvider } from '../context/PaginationContext';
import GlobalStyle from '../styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        <BlogThemeProvider>
            <PaginationProvider>
                <ToastContainer limit={5} style={{ fontSize: '1.4rem' }} />
                <GlobalStyle />
                <Component {...pageProps} key={router.asPath} />
            </PaginationProvider>
        </BlogThemeProvider>
    );
}
