import { ArticleHeader, TArticleHeaderProps } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import * as S from './styles';
export type TPostComponentProps = TArticleHeaderProps & {
    content: string;
};
export function Post({ content, cover, createdAt, excerpt, id, title, author, categories }: TPostComponentProps) {
    return (
        <S.Container>
            <ArticleHeader
                author={author}
                categories={categories}
                cover={cover}
                createdAt={createdAt}
                excerpt={excerpt}
                title={title}
                id={id}
            />
            <HtmlContent html={content} />
        </S.Container>
    );
}
