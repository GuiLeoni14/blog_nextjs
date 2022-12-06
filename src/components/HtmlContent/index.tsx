import Prism from 'prismjs';
import { useEffect } from 'react';
import { PrismWrapper } from './prism-vscode-dark';
import * as Styled from './styles';

export type HtmlContentProps = {
  html: string;
};

export const HtmlContent = ({ html }: HtmlContentProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const all_tag_code = document.querySelectorAll('.html_content code');
      all_tag_code.forEach((tag) => (tag.className = 'language-javascript'));
      Prism.highlightAll();
    }
  }, []);

  return (
    <PrismWrapper>
      <Styled.Container dangerouslySetInnerHTML={{ __html: html }} className="html_content" />
    </PrismWrapper>
  );
};
