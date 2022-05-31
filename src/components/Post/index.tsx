import { ArticleHeader, TArticleHeaderProps } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import * as S from './styles';
export type TPostComponentProps = TArticleHeaderProps & {
    content: string;
};
export function Post({ content, cover, createdAt, excerpt, id, title, autor, categories }: TPostComponentProps) {
    return (
        <S.Container>
            <ArticleHeader
                autor={autor}
                categories={categories}
                cover={cover}
                createdAt={createdAt}
                excerpt={excerpt}
                title={title}
                id={id}
            />
            <S.Content>
                <S.LeftContent>
                    <h1>left</h1>
                </S.LeftContent>
                <S.RightContent>
                    <HtmlContent html={content} />
                </S.RightContent>
            </S.Content>
        </S.Container>
    );
}
