import { AppProps } from 'next/app';
import { BlogThemeProvider } from '../context/BlogThemeContext';
import { PaginationProvider } from '../context/PaginationContext';
import GlobalStyle from '../styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';
import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import '../../public/css/nprogress.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        const handleStart = () => {
            NProgress.start();
        };
        const handleStop = () => {
            NProgress.done();
        };

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleStop);
        router.events.on('routeChangeError', handleStop);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleStop);
            router.events.off('routeChangeError', handleStop);
        };
    }, [router]);
    return (
        <ApolloProvider client={client}>
            <BlogThemeProvider>
                <PaginationProvider>
                    <ToastContainer limit={5} style={{ fontSize: '1.4rem' }} />
                    <GlobalStyle />
                    <Component {...pageProps} key={router.asPath} />
                </PaginationProvider>
            </BlogThemeProvider>
        </ApolloProvider>
    );
}
