import Head from 'next/head';
import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Head>
                <title>blog - gui</title>
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
