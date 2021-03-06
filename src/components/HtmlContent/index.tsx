import Prism from 'prismjs';
import * as Styled from './styles';
import { PrismWrapper } from './prism-vscode-dark';
import { useEffect, useState } from 'react';

export type HtmlContentProps = {
    html: string;
};

export const HtmlContent = ({ html }: HtmlContentProps) => {
    const [componentIsMounted, setComponentIsMounted] = useState(false); // para resolver erro de:Prop `dangerouslySetInnerHTML` did not match.
    useEffect(() => {
        // let removeAds = null;
        setComponentIsMounted(true);
        if (typeof window !== 'undefined' && componentIsMounted) {
            Prism.highlightAll();
            // removeAds = setTimeout(() => {
            //     document.querySelectorAll('iframe[src*=ads]').forEach((el) => el.remove());
            // }, 1000);
        }
        // return () => clearTimeout(removeAds);
    }, [componentIsMounted]);

    return (
        <PrismWrapper>
            {componentIsMounted && <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />}
        </PrismWrapper>
    );
};
