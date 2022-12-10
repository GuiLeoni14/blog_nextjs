import { QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../public/css/nprogress.css';
import { BlogThemeProvider } from '../context/BlogThemeContext';
import { queryClient } from '../lib/queryClient';
import GlobalStyle from '../styles/global';

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
    <QueryClientProvider client={queryClient}>
      <BlogThemeProvider>
        <ToastContainer limit={5} style={{ fontSize: '1.4rem' }} />
        <GlobalStyle />
        <Component {...pageProps} key={router.asPath} />
      </BlogThemeProvider>
    </QueryClientProvider>
  );
}
