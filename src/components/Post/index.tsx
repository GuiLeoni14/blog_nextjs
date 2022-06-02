import { ArticleHeader, TArticleHeaderProps } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import { PostTopics } from '../PostTopics';
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
                    <PostTopics searchClassTopics="topics_search" />
                </S.LeftContent>
                <S.RightContent className="topics_search">
                    <HtmlContent html={content} />
                </S.RightContent>
            </S.Content>
        </S.Container>
    );
}
